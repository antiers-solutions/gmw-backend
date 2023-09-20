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
  BUDGETS
} from '../constants';
import { v4 } from 'uuid';
import { log } from '../utils/helper.utils';

/**
 * It extracts the metadata file data
 * @param mdContent
 * @returns
 */

function removeDuplicateObjects(arr) {
  const uniqueArray = [];
  const seenObjects = new Set();

  for (const obj of arr) {
    const objString = JSON.stringify(obj);
    if (!seenObjects.has(objString)) {
      seenObjects.add(objString);
      uniqueArray.push(obj);
    }
  }

  return uniqueArray;
}

const reformMDContent = (mdContent: string) => {
  let fileData = '';
  for (const item of parsedMdFile(mdContent)) {
    if (item.content && item.content !== '\n') fileData += `${item.content}\n`;
  }
  return fileData;
};

// is used to parse a table in an .md file into a JSON object
const parseMarkdownTable = (tableText) => {
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

export const getMilestoneOpenPullRequests = async () => {
  try {
    log.green('This is the pull check section');

    const milstonePurposals: any[] = [];

    // get all open pull requests for the milstones/delivery section
    const openPullRequetsMilestones = await octoConnectionHelper.octoRequest(
      'GET /repos/w3f/Grant-Milestone-Delivery/pulls',
      {
        state: 'open',
        per_page: 100
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
        `GET /repos/w3f/Grant-Milestone-Delivery/pulls/${item.number}/reviews`,
        {
          state: 'open',
          per_page: 100
        }
      );

      const reviewers = reviews.data
        .filter((review: any) => {
          return (
            review?.state === 'CHANGES_REQUESTED' ||
            review?.state === 'APPROVED'
          );
        })
        .map((review) => {
          return {
            reviewer: review?.user?.login,
            reviewer_id: review?.user?.id,
            reviewer_avatar: review?.user?.avatar_url || ''
          };
        });

      const finalreviewers = removeDuplicateObjects(reviewers);

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
      const MilestonefileDetailsResponse =
        await octoConnectionHelper.octoRequest(
          `GET /repos/w3f/Grant-Milestone-Delivery/pulls/${item.number}/files`,
          {
            state: 'open'
          }
        );

      const fileName = MilestonefileDetailsResponse?.data[0]?.filename
        .replace('deliveries/', '')
        .toLowerCase();

      // Extract and parse the table content from the Markdown content

      const res = await axios.get(MilestonefileDetailsResponse.data[0].raw_url);
      const projectLink = res.data
        .split('\n')
        .filter(
          (item: any) =>
            (item.startsWith('* **') || item.startsWith('- **')) &&
            item.includes(':**')
        )
        .map((item: any) =>
          item
            .replace('* **Application Document:** ', '')
            .replace('- **Application Document:** ', '')
            .replace('(', '')
            .replace(')', '')
            .replace(/\[[A-za-z0-9 -_&$]*\]/g, '')
            .trim()
        )
        .find((item) => item.startsWith('https://'));

      const tableRegex = /\|(.+)\|\s*\n\|(.+)\|/s;
      const match = res.data.match(tableRegex);

      if (match) {
        const tableText = match[0];
        const tableData = parseMarkdownTable(tableText);
        const repo = tableData
          .filter((item) => {
            return (
              item?.Deliverable?.includes('https://github.com') ||
              item?.Link?.includes('https://github.com')
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
          md_link: null,
          created_at: createdAt,
          updated_at: updatedAt,
          reviewers: finalreviewers,
          repos: repo,
          assignee_details: assigneeDetails || ''
        };

        console.log(milestoneApplication, 'applications');
        milstonePurposals.push(milestoneApplication);
      }
    }

    return milstonePurposals;
  } catch (error) {
    log.red(error);
  }
};

/**
 * It gets all the closed pull request data and parse it
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
          `${HTTP_METHODS.GET} ${grantRepoPullsPath}/${item.number}/files`,
          {
            state: PULL_REQUEST_TYPE.CLOSED,
            base: BRANCHS.MASTER,
            direction: ORDERS.ASEC,
            head: `w3f:${''}`
          }
        );

        // get the reviwers details
        const reviwers = await octoConnectionHelper.octoRequest(
          `${HTTP_METHODS.GET} ${grantRepoPullsPath}/${item.number}/reviews`,
          {
            state: PULL_REQUEST_TYPE.CLOSED,
            base: BRANCHS.MASTER,
            direction: ORDERS.DESC,
            head: `w3f:${''}`
          }
        );

        const approvals = reviwers?.data?.filter(
          (reviewer: any) => reviewer.state === 'APPROVED'
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
 * It loads the data of all the already merged metedata project files to database
 * this function only run when there is no project data found in database
 * @returns
 */
const loadInitialGrantsData = async () => {
  try {
    log.log('Initial data started loading, it may take a while.');

    //###################TO BE REMOVED##################################
    console.log('working');
    const proposalMilestone1 = await getMilestoneOpenPullRequests();
    await mongoDataHelper.bulkSaveData(
      DATA_MODELS.MilestoneProposal,
      proposalMilestone1
    );

    return;

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

    // this is the data for the open pull requests of the milestones repo
    const proposalMilestone = await getMilestoneOpenPullRequests();

    // get all merged pull request data
    const mergedPullRequests = await getPullRequestDetails();

    //if merge request data not found then throw error
    if (!mergedPullRequests)
      throw new Error(ERROR_MESSAGES.ERROR_WHILE_EXTRACTING_PULL_REQUEST_DATA);

    // extract the data from each md
    for (const file of files.data) {
      if (
        file.name === 'index.md' &&
        file.name === 'maintenance' &&
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

    // save the bulk data into db
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

    return { project, team, milestones };
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
