import parsedMdFile from './mdParse.helper';
import axios from 'axios';
import octoConnectionHelper from './octoConnection.helper';
import mongoDataHelper from './mongo.data.helper';
import {
  BRANCHS,
  DATA_MODELS,
  ERROR_MESSAGES,
  GRANT_REPO_PATH,
  PULLS,
  HTTP_METHODS,
  ORDERS,
  PAGE_LIMIT,
  PULL_REQUEST_TYPE,
  STATUS,
  USED_STRINGS,
  LEVELS,
  BUDGETS,
  GITHUB_URL,
  REVIEWS_PATH,
  REVIEWS_STATUS,
  FILES_PATH
} from '../constants';
import { v4 } from 'uuid';
import { log } from '../utils/helper.utils';
import { ReviewerDetails, GitHubReview } from 'interfaces/types';

/**
 * get the reviewer from the reviews
 * @param reviewsArr reviewer array
 * @returns
 */
function getReviewers(reviewsArr: GitHubReview[]) {
  const uniqueReviewer = {};

  const reviewers: ReviewerDetails[] = reviewsArr
    .filter((review: GitHubReview) => {
      const isAlreadyExist = uniqueReviewer[review.user?.id];
      if (!isAlreadyExist) uniqueReviewer[review.user?.id] = !isAlreadyExist;
      return (
        review?.state === REVIEWS_STATUS.CHANGES_REQUESTED ||
        (review?.state === REVIEWS_STATUS.APPROVED && !isAlreadyExist)
      );
    })
    .map((review: GitHubReview) => {
      return {
        reviewer: review?.user?.login,
        reviewer_id: review?.user?.id,
        reviewer_avatar: review?.user?.avatar_url || ''
      };
    });

  return reviewers;
}

/**
 * It extracts the metadata file data
 * @param mdContent
 * @returns
 */
const reformMDContent = (mdContent: string) => {
  let fileData = '';
  for (const item of parsedMdFile(mdContent)) {
    if (item.content && item.content !== '\n') fileData += `${item.content}\n`;
  }
  return fileData;
};

// is used to parse a table in an .md file into a JSON object
const parseMarkdownTable = (tableText: string) => {
  const lines = tableText.trim().split('\n');
  const headers = lines[0]
    .trim()
    .split('|')
    .map((header) => header.trim());
  const rows = [];

  for (let i = 2; i < lines.length; i++) {
    const rowValues = lines[i]
      .trim()
      .split('|')
      .map((value) => value.trim());
    const rowObject = {};

    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowValues[j];
    }

    rows.push(rowObject);
  }

  return rows;
};

/**
 * get and load milestone open pull requests
 * @returns
 */
export const getMilestoneOpenPullRequests = async () => {
  try {
    log.green('Loading milestone open pull requests');

    const milstonePurposals: any[] = [];
    const pullRequestUrl = `${HTTP_METHODS.GET} ${GRANT_REPO_PATH}${PULLS}`;

    // get all open pull requests for the milstones/delivery section
    const openPullRequetsMilestones = await octoConnectionHelper.octoRequest(
      pullRequestUrl,
      {
        state: PULL_REQUEST_TYPE.OPEN,
        per_page: PAGE_LIMIT
      }
    );

    const milestoneRequests = openPullRequetsMilestones?.data;

    for (const item of milestoneRequests) {
      const prLink = item?.url;
      const status = item?.state;
      const userDetails = {
        git_user_name: item?.user?.login,
        git_user_id: item?.user?.id,
        git_user_avatar: item?.user?.avatar_url
      };

      const reviews = await octoConnectionHelper.octoRequest(
        `${pullRequestUrl}/${item.number}${REVIEWS_PATH}`,
        {
          state: PULL_REQUEST_TYPE.OPEN,
          per_page: PAGE_LIMIT
        }
      );

      // reviewers for the current pull request
      const finalreviewers = getReviewers(reviews.data);

      const createdAt = item?.created_at;
      const updatedAt = item?.updated_at;
      const assigneeDetails: any[] = [];

      for (const assignee of item?.assignees || []) {
        const assigneeObject = {
          git_user_name: assignee?.login,
          git_user_id: assignee?.id,
          git_avatar: assignee?.avatar_url
        };

        assigneeDetails.push(assigneeObject);
      }

      // get the file data for pull request using the pull request number
      const milestonefileDetailsResponse =
        await octoConnectionHelper.octoRequest(
          `${pullRequestUrl}/${item.number}${FILES_PATH}`,
          {
            state: PULL_REQUEST_TYPE.OPEN
          }
        );

      const fileName = milestonefileDetailsResponse?.data[0]?.filename
        .replace(USED_STRINGS.DELIVERIES + '/', '')
        .toLowerCase();

      const regex = /(\d+)\.md$/;
      const matches = fileName?.trim()?.length ? fileName.match(regex) : 0;
      const milestoneLevel = matches[1] ? parseInt(matches[1]) : 0;

      // this has the md content
      const mdContentUrl = milestonefileDetailsResponse?.data[0]?.raw_url;

      // Extract and parse the table content from the Markdown content

      const res = await axios.get(milestonefileDetailsResponse.data[0].raw_url);
      const projectLink = res.data
        .split('\n')
        .filter(
          (item: string) =>
            (item.startsWith('* **') || item.startsWith('- **')) &&
            item.includes(':**')
        )
        .map((item: string) =>
          item
            .replace(
              `* **${USED_STRINGS.APPLICATION} ${USED_STRINGS.DOCUMENT}:** `,
              ''
            )
            .replace(
              `- **${USED_STRINGS.APPLICATION} ${USED_STRINGS.DOCUMENT}:** `,
              ''
            )
            .replace('(', '')
            .replace(')', '')
            .replace(/\[[A-za-z0-9 -_&$]*\]/g, '')
            .trim()
        )
        .find((item: string) => item.startsWith('https://'));

      const parts = projectLink?.trim()?.length
        ? projectLink?.split('/')
        : null;

      const applicationName = parts?.length ? parts[parts?.length - 1] : '';

      const tableRegex = /\|(.+)\|\s*\n\|(.+)\|/s;
      const match = res.data.match(tableRegex);

      if (match) {
        const tableText = match[0];
        const tableData = parseMarkdownTable(tableText);
        const repo = tableData
          .filter((item) => {
            return (
              item?.Deliverable?.includes(GITHUB_URL) ||
              item?.Link?.includes(GITHUB_URL)
            );
          })
          .map((item) => {
            const Deliverable =
              item?.Deliverable?.match(/https?:\/\/[^\s]+/) || '';
            const Link = item?.Link?.match(/https?:\/\/[^\s]+/) || '';

            // Extract GitHub links from the field
            return {
              Deliverable:
                Deliverable[0] === undefined ? Deliverable : Deliverable[0],
              Link: Link[0] === undefined ? Link : Link[0],
              Notes: item?.Notes === undefined ? '' : item?.Notes
            };
          });

        const milestoneApplication = {
          id: v4(),
          pr_link: prLink,
          pr_number: item.number,
          status: status,
          file_name: fileName,
          user_github_details: userDetails,
          project_md_link: projectLink ? projectLink : '',
          application_name: applicationName || '',
          md_content_url: mdContentUrl,
          milestone_level: Number(milestoneLevel),
          md_link: null,
          created_at: createdAt,
          updated_at: updatedAt,
          reviewers: finalreviewers,
          repos: repo,
          assignee_details: assigneeDetails || ''
        };

        // to be remove
        log.log('Application', item.number);
        milstonePurposals.push(milestoneApplication);
      }
    }

    return milstonePurposals;
  } catch (error) {
    log.red(error);
  }
};

/**
 * get all the closed pull request data and parse it
 * @returns
 */
const getPullRequestDetails = async () => {
  try {
    const mergedPullRequestsForAddedFiles: any = {};
    const purposals: any[] = [];

    let page = 1;
    const grantRepoPullsPath = `${
      process.env.GITHUB_REPO_PATH || GRANT_REPO_PATH
    }${PULLS}`;

    // get the all closed pull requests
    for (;;) {
      // get the all merged data
      const pullRequestsResponse = await octoConnectionHelper.octoRequest(
        `${HTTP_METHODS.GET} ${grantRepoPullsPath}`,
        {
          state: PULL_REQUEST_TYPE.CLOSED,
          base: BRANCHS.MASTER,
          per_page: PAGE_LIMIT,
          page
        }
      );

      // break if the data not found on next page
      if (!pullRequestsResponse.data?.length) break;

      const pullRequests = pullRequestsResponse?.data;
      if (!pullRequests) continue;

      // get the pull request file data using the pull request number
      for (const item of pullRequests) {
        //if pull is not merged then skip it

        // get the file data for pull request using the pull request number
        const fileDetailsResponse = await octoConnectionHelper.octoRequest(
          `${HTTP_METHODS.GET} ${grantRepoPullsPath}/${item.number}${FILES_PATH}`,
          {
            state: PULL_REQUEST_TYPE.CLOSED,
            base: BRANCHS.MASTER,
            direction: ORDERS.ASEC,
            head: `w3f:${''}`
          }
        );

        // get the reviwers details
        const reviwers = await octoConnectionHelper.octoRequest(
          `${HTTP_METHODS.GET} ${grantRepoPullsPath}/${item.number}${REVIEWS_PATH}`,
          {
            state: PULL_REQUEST_TYPE.CLOSED,
            base: BRANCHS.MASTER,
            direction: ORDERS.DESC,
            head: `w3f:${''}`
          }
        );

        const approvals = reviwers?.data?.filter(
          (reviewer: any) => reviewer.state === REVIEWS_STATUS.APPROVED
        ).length;

        // continue the next iteration if the status of file is not added
        if (fileDetailsResponse?.data[0]?.status !== 'added') continue;

        // add the merged pull request data for further usage
        const fileName = fileDetailsResponse?.data[0]?.filename
          .replace('applications/', '')
          .toLowerCase();

        const application = {
          id: v4(),
          status: '',
          pr_link: item.url,
          approvals,
          team_name: '',
          branch_name: '',
          milestones: [],
          proposal_name: fileName,
          file_name: fileName,
          created_at: item?.created_at,
          extrected_proposal_data: ''
        };

        // check if closed pull request is merged or not
        if (fileName && item?.merged_at) {
          // collect data for syncing the merge date on project data
          mergedPullRequestsForAddedFiles[fileName] = {
            mergedAt: item?.merged_at,
            createdAt: item?.created_at,
            pullNumber: item?.number,
            pullId: item?.id,
            pullSHA: item?.merge_commit_sha,
            fileName
          };

          // set the purposal status to accepted
          application.status = STATUS.ACCEPTED;
        } else if (fileName && item?.created_at) {
          application.status = STATUS.REJECTED;
        }

        // collect the all closed purposals
        purposals.push(application);
      }

      // check the next page
      page++;
    }

    return { mergedPullRequestsForAddedFiles, purposals };
  } catch (err) {
    log.red(
      'Error while getting and formatting the all closed pull request data:\n',
      err
    );
    return null;
  }
};

/**
 * get all the open pull request data and parse it
 * @returns
 */
const openPullRequestDetails = async () => {
  try {
    let page = 1;
    const purposals: any[] = [];
    const grantRepoPullsPath = `${HTTP_METHODS.GET} ${
      process.env.GITHUB_REPO_PATH || GRANT_REPO_PATH
    }${PULLS}`;

    for (;;) {
      const pullRequestsResponse = await octoConnectionHelper.octoRequest(
        grantRepoPullsPath,
        {
          state: PULL_REQUEST_TYPE.OPEN,
          base: BRANCHS.MASTER,
          per_page: PAGE_LIMIT,
          page
        }
      );

      const pullRequests = pullRequestsResponse?.data;
      if (!pullRequests?.length) break;

      // get the pull request file data using the pull request number
      for (const item of pullRequests) {
        // get the file data for pull request using the pull request number
        const fileDetailsResponse = await octoConnectionHelper.octoRequest(
          `${grantRepoPullsPath}/${item.number}${FILES_PATH}`
        );

        // get the reviews details
        const reviews = await octoConnectionHelper.octoRequest(
          `${grantRepoPullsPath}/${item.number}${REVIEWS_PATH}`
        );
        // reviewers for the current pull request
        const finalreviewers = getReviewers(reviews?.data);
        const fileName = fileDetailsResponse?.data[0]?.filename
          .replace('applications/', '')
          .toLowerCase();

        // parse the content of project proposal metadata file
        const parsedData = await parseMetaDataFile(
          { download_url: fileDetailsResponse.data[0].raw_url },
          {
            [fileName]: { merged_at: item?.merged_at }
          }
        );

        // get assignes
        const assignees = item?.assignees.map((data: any) => ({
          git_user_id: data?.id || '',
          git_user_name: data?.login || '',
          git_avatar_url: data?.avatar_url || ''
        }));

        const proposalData = {
          assignees,
          pr_link: item.url,
          file_name: fileName,
          status: STATUS.OPEN,
          updated_at: item?.updated_at,
          created_at: item?.created_at,
          reviewers: finalreviewers || [],
          id: parsedData?.proposal?.id || v4(),
          repos: parsedData?.proposal?.repos || [],
          md_link: parsedData?.proposal?.md_link || '',
          milestones: parsedData?.milestones || [],
          team_name: parsedData?.proposal?.team_name || '',
          proposal_name: parsedData?.proposal?.proposal_name || '',
          user_github_details: {
            git_user_id: item?.user?.id || '',
            git_user_name: item?.user?.login || '',
            git_avatar_url: item?.user?.avatar_url || ''
          },
          extrected_proposal_data: JSON.stringify({
            teams: parsedData.team,
            project: parsedData.project
          })
        };
        purposals.push(proposalData);
        log.log('Number: ', item.number);
      }
      page++;
    }

    return { purposals };
  } catch (err) {
    log.red(
      'Error while getting the all open pull request data:\n',
      err.message
    );
    return null;
  }
};

/**
 * It loads the data of all the already merged metedata project files to database
 * this function only run when there is no project data found in database
 * @returns
 */
const loadInitialGrantsData = async () => {
  try {
    log.log('Initial data started loading, it may take a while.');

    // get all purposed md files
    const files: any = await octoConnectionHelper.octoRequest(
      `GET ${process.env.APPLICATIONS_REPO}`
    );

    //get all milestones files
    const milestoneFiles: any = await octoConnectionHelper.octoRequest(
      `GET ${process.env.DELIVERIES_REPO}`
    );

    // if projects and milestone meta-data file not found then return
    if (!files?.data && !milestoneFiles?.data) {
      log.red('Project Metadata and Milestone Metadata file not found');
      return;
    }

    const extractedData: any = { team: [], project: [], milestone: [] };

    //get all opened pull request data
    const openPullRequests = await openPullRequestDetails();

    // this is the data for the open pull requests of the milestones repo
    const proposalMilestone = await getMilestoneOpenPullRequests();

    // get all merged pull request data
    const mergedPullRequests = await getPullRequestDetails();

    //if merge request or open pull request data not found then throw error
    if (!openPullRequests || !mergedPullRequests || !proposalMilestone)
      throw new Error(ERROR_MESSAGES.ERROR_WHILE_EXTRACTING_PULL_REQUEST_DATA);

    // extract the data from each md
    for (const file of files.data) {
      if (
        file.name === 'index.md' ||
        file.name === 'maintenance' ||
        file.name === '_category_.yml'
      )
        continue;

      const mdData = await parseMetaDataFile(
        file,
        mergedPullRequests?.mergedPullRequestsForAddedFiles
      );
      if (!mdData.project && !mdData.team) continue;

      const speficMilestoneFiles = milestoneFiles.data.filter((item: any) =>
        item.name
          .toLowerCase()
          .startsWith(file.name.replace('.md', '').toLowerCase())
      );

      //update the status in the project data
      mdData.project.status =
        speficMilestoneFiles.length < mdData.milestones.length
          ? 'active'
          : 'complete';

      // update the team status
      mdData.team.projects[0].status = mdData.project.status;

      //get milestone payload for database
      const milestones = await formMilestonePayload(
        speficMilestoneFiles,
        mdData.milestones,
        file,
        mdData.project.id
      );

      //add the milestones into project
      mdData.project.milestones.push(...milestones.milestoneIds);

      //push the data into bulk save array
      extractedData.team.push(mdData.team);
      extractedData.project.push(mdData.project);
      extractedData.milestone.push(...milestones.milestoneFileData);
    }

    // save the purposal data in bulk
    await mongoDataHelper.bulkSaveData(
      DATA_MODELS.Proposal,
      openPullRequests.purposals
    );

    // save the purposal data in bulk
    await mongoDataHelper.bulkSaveData(
      DATA_MODELS.Proposal,
      openPullRequests.purposals
    );

    // save the project data in bulk
    await mongoDataHelper.bulkSaveData(
      DATA_MODELS.Project,
      extractedData.project
    );
    // save the team data in bulk
    await mongoDataHelper.bulkSaveData(DATA_MODELS.Team, extractedData.team);

    // save the milestone data in bulk
    await mongoDataHelper.bulkSaveData(
      DATA_MODELS.Milestone,
      extractedData.milestone
    );

    // save the purposal data in bulk
    await mongoDataHelper.bulkSaveData(
      DATA_MODELS.Proposal,
      mergedPullRequests.purposals
    );

    // save the milstone proposals data
    await mongoDataHelper.bulkSaveData(
      DATA_MODELS.MilestoneProposal,
      proposalMilestone
    );

    log.green('Data Successfully Stored');
  } catch (err) {
    log.red('Error in the initial grants data loading into database:\n', err);
  }
};

export default loadInitialGrantsData;

/**
 * It is used for extracting and parsing the all merged metadata files data
 * @param mdDetails
 * @param mergedPullRequests
 * @returns
 */
export const parseMetaDataFile = async (
  mdDetails: any,
  mergedPullRequests?: any
) => {
  try {
    const res = await axios.get(mdDetails.download_url);
    const fileData = reformMDContent(res.data);

    const splitDataArray = fileData.split('\n');
    const projectName = splitDataArray[0];
    const teamMember = fileData
      .slice(
        fileData.indexOf(USED_STRINGS.TEAM_MEMBERS),
        fileData.indexOf(USED_STRINGS.CONTACT) > 0
          ? fileData.indexOf(USED_STRINGS.CONTACT)
          : fileData.indexOf(USED_STRINGS.TEAM_WEBSITE)
      )
      .split('\n');
    teamMember.shift();
    teamMember.pop();

    // extract the milestone data
    const mileStoneTable = [];
    for (let i = 1; i <= 10; i++) {
      const start = fileData.indexOf(`${USED_STRINGS.MILESTONE} ${i} `);
      const end = fileData.indexOf(`${USED_STRINGS.MILESTONE} ${i + 1} `);

      if (start < 0 && end < 0) break;

      const milestoneString = fileData
        .slice(start, end)
        .split('\n')
        .filter((item) => item.startsWith('**') && item.includes(':**'))
        .map((item) => item.replace(/\*\*/g, '').toLowerCase().split(': '));

      mileStoneTable.push(milestoneString);
    }

    const milestones: any = [];
    mileStoneTable.forEach((item, index) => {
      const tempMilestoneStore: any = {};
      item.forEach((innerItem) => {
        if (innerItem[0] === USED_STRINGS.ESTIMATED_DURATION)
          tempMilestoneStore[innerItem[0]] = innerItem[1];
        if (innerItem[0] === USED_STRINGS.FTE)
          tempMilestoneStore[innerItem[0]] = innerItem[1];
        if (
          innerItem[0] === USED_STRINGS.COSTS ||
          innerItem[0] === USED_STRINGS.COST
        )
          tempMilestoneStore[USED_STRINGS.COSTS] = innerItem[1];
      });
      milestones[index] = tempMilestoneStore;
    });

    const tempProjectData = splitDataArray
      .filter((item) => item.startsWith('**'))
      .join('\n')
      .replace(/\*\*/g, '')
      .split('\n');

    const pairData: any = {};
    pairData[USED_STRINGS.PROJECT_NAME] = projectName;
    tempProjectData.forEach((item, index) => {
      const splitData = item.trim().toLowerCase().split(': ');

      if (index === 1) {
        pairData[splitData[0]] = `${splitData[1]} ${splitData[2] || ''}`.trim();
        return;
      } else if (index === 2) {
        pairData[USED_STRINGS.LEVEL] =
          `${splitData[1]} ${splitData[2] || ''}`.trim() || '';
        return;
      }
      pairData[splitData[0].toLowerCase()] = splitData[1];
    });

    // reform data for loading it into db
    const teamId = v4();
    const projectId = v4();
    const proposalId = v4();

    const team: any = {
      id: teamId,
      name:
        pairData[USED_STRINGS.TEAM_NAME] ||
        pairData[USED_STRINGS.PROPOSER] ||
        '',
      members: teamMember,
      projects: [{ projectId, status: null }]
    };

    // extract the currency and amount from joint string
    let [amount, currency] = pairData[USED_STRINGS.TOTAL_COSTS]
      ? pairData[USED_STRINGS.TOTAL_COSTS].split(' ')
      : pairData[USED_STRINGS.TOTAL_COST]
      ? pairData[USED_STRINGS.TOTAL_COST].split(' ')
      : ['', ''];
    currency = amount
      ? amount.includes('$')
        ? USED_STRINGS.USD
        : currency
      : '';
    amount = amount
      ? amount.replace(/[$,]/g, '')
      : pairData[USED_STRINGS.TOTAL_COSTS]
      ? pairData[USED_STRINGS.TOTAL_COST]
      : '';

    const amountNum = Number(amount);
    if (
      (amountNum &&
        currency !== USED_STRINGS.BTC &&
        Number(pairData[USED_STRINGS.LEVEL]) > 3) ||
      !Number(pairData[USED_STRINGS.LEVEL])
    ) {
      if (amountNum <= BUDGETS.L1) pairData[USED_STRINGS.LEVEL] = LEVELS.L1;
      else if (amountNum <= BUDGETS.L2)
        pairData[USED_STRINGS.LEVEL] = LEVELS.L2;
      else if (amountNum > BUDGETS.L2) pairData[USED_STRINGS.LEVEL] = LEVELS.L3;
      else pairData[USED_STRINGS.LEVEL] = '';
    }

    const project: any = {
      id: projectId,
      user_github_id: null,
      start_date: mergedPullRequests[mdDetails?.name?.toLowerCase()]?.mergedAt,
      file_name: mdDetails?.name?.toLowerCase(),
      payment_details: pairData[USED_STRINGS.PAYMENT_ADDRESS],
      md_content: res?.data,
      md_link: mdDetails?.download_url,
      project_name: pairData[USED_STRINGS.PROJECT_NAME]
        ? pairData[USED_STRINGS.PROJECT_NAME].toLowerCase()
        : '',
      status: null,
      total_cost: { amount, currency },
      total_duration: pairData[USED_STRINGS.TOTAL_ESTIMATED_DURATION] || '',
      team_id: teamId,
      level: pairData[USED_STRINGS.LEVEL],
      html_url: mdDetails?.html_url,
      legal_structure: {
        registered_address:
          pairData[`${USED_STRINGS.REGISTERED} ${USED_STRINGS.ADDRESS}`] || '',
        registered_legal_entity:
          pairData[`${USED_STRINGS.REGISTERED} ${USED_STRINGS.LEGAL_ENTITY}`] ||
          ''
      },
      totalMilestones: milestones.length,
      milestones: []
    };

    const teamCodeRepos = [];
    //Exterecting Teams Code Repos Urls
    const teamCodeRepoIndex = splitDataArray.indexOf(
      USED_STRINGS.TEAM_CODE_REPOS
    );
    for (let i = teamCodeRepoIndex + 1; i < splitDataArray.length; i++) {
      const element = splitDataArray[i];
      if (element.includes(GITHUB_URL)) teamCodeRepos.push(element);
      else break;
    }

    const proposal = {
      id: proposalId,
      repos: teamCodeRepos,
      md_link: mdDetails?.download_url,
      proposal_name: pairData[USED_STRINGS.PROJECT_NAME]
        ? pairData[USED_STRINGS.PROJECT_NAME].toLowerCase()
        : '',
      team_name:
        pairData[USED_STRINGS.TEAM_NAME] ||
        pairData[USED_STRINGS.PROPOSER] ||
        ''
    };

    return { project, team, milestones, proposal };
  } catch (err) {
    log.red(`${ERROR_MESSAGES.ERROR_WHILE_PARSING_METADATA_FILE}`, err);
    return { project: null, team: null, milestones: null };
  }
};

/**
 * It is used to extract the milestones data
 * @param miltestoneMds
 * @param milestoneDetails
 * @param projectFileDetails
 * @param projectId
 * @returns
 */
const formMilestonePayload = async (
  miltestoneMds: any[],
  milestoneDetails: any[],
  projectFileDetails: any,
  projectId: string
) => {
  try {
    const milestoneFileData = [];
    const milestoneIds = [];

    // extract the milteston data payload
    for (let index = 0; index < miltestoneMds.length; index++) {
      const res = await axios.get(miltestoneMds[index].download_url);

      // create milestone payload for db
      const milestoneId = v4();
      milestoneIds.push(milestoneId);

      //payload for saving into db
      const milestonePayload = {
        id: milestoneId,
        file_name: miltestoneMds[index].name,
        milestoneNo: index + 1,
        project_id: projectId,
        user_github_id: '',
        project_md_link: projectFileDetails.html_url,
        md_content: res.data,
        status: STATUS.COMPLETE,
        cost: milestoneDetails[index] ? milestoneDetails[index].costs : '',
        merged_at: ''
      };
      milestoneFileData.push(milestonePayload);
    }
    return { milestoneFileData, milestoneIds };
  } catch (err) {
    log.red('Error while fething and formating the milestone data:\n', err);
    return { milestoneFileData: [], milestoneIds: [] };
  }
};
