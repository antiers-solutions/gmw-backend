import parsedMdFile from './mdParse.helper';
import octoConnectionHelper from './octoConnection.helper';
import mongoDataHelper from './mongo.data.helper';
import {
  BRANCHS,
  DATA_MODELS,
  ERROR_MESSAGES,
  HTTP_METHODS,
  ORDERS,
  PAGE_LIMIT,
  PULL_REQUEST_TYPE,
  STATUS,
  USED_STRINGS,
  LEVELS,
  BUDGETS,
  GITHUB_URL,
  REVIEWS_STATUS,
  GITHUB_REPO_PATHS,
  PROJECT_STATUS,
  GITHUB_USER_DATA_URL
} from '../constants';
import { v4 } from 'uuid';
import { get, log } from '../utils/helper.utils';
import { ReviewerDetails, GitHubReview } from 'interfaces/types';
import { loadDataFromJsonFile } from './jsondata.helper';

// helper paths
const {
  DEFAULT_PATH,
  GRANT_REPO,
  DELIVERIES_REPO,
  DELIVERIES_PATH,
  APPLICATION_PATH,
  CONTENT_PATH,
  PULLS_PATH,
  REVIEWS_PATH,
  FILES_PATH
} = GITHUB_REPO_PATHS;

/**
 * Helper for parsing the grant metadata
 */

/**
 * get the team related data parsed
 * @param mdParsedTree
 * @returns
 */
const parseTeam = (mdParsedTree: string) => {
  const teamMember = mdParsedTree
    .slice(
      mdParsedTree.indexOf(USED_STRINGS.TEAM_MEMBERS),
      mdParsedTree.indexOf(USED_STRINGS.CONTACT) > 0
        ? mdParsedTree.indexOf(USED_STRINGS.CONTACT)
        : mdParsedTree.indexOf(USED_STRINGS.TEAM_WEBSITE)
    )
    .split('\n');
  teamMember.shift();
  teamMember.pop();

  return teamMember;
};

/**
 * get the milestone related data parsed
 * @param mdParsedTree
 * @returns
 */
const parseMilestones = (mdParsedTree: string) => {
  // extract the milestone data
  const milestoneTable = [];

  // get the milestone data chunks
  let mIndex = 1;
  for (;;) {
    const start = mdParsedTree.indexOf(`${USED_STRINGS.MILESTONE} ${mIndex} `);
    const end = mdParsedTree.indexOf(
      `${USED_STRINGS.MILESTONE} ${mIndex + 1} `
    );

    if (start < 0 && end < 0) break;

    const milestoneString = mdParsedTree
      .slice(start, end)
      .split('\n')
      .filter((item) => item.startsWith('**') && item.includes(':**'))
      .map((item) => item.replace(/\*\*/g, '').toLowerCase().split(': '));

    milestoneTable.push(milestoneString);
    mIndex++;
  }

  // reform the milestone data for actual usage
  const milestones: any = [];
  milestoneTable.forEach((item, index) => {
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

  return milestones;
};

/**
 * parse the other important data from grants metadata file
 * @param mdParsedTree
 */
const parseAndReformGrantData = (mdDataStrings: string[]) => {
  if (!mdDataStrings?.length && typeof mdDataStrings !== 'string') return null;

  // split the string into array of substring chunks with whenever newline character found
  const splitDataArray = mdDataStrings;

  if (!splitDataArray.length) return null;

  const projectName = splitDataArray[0];
  const tempProjectData = splitDataArray
    .filter((item) => item.startsWith('**'))
    .join('\n')
    .replace(/\*\*/g, '')
    .split('\n');

  const tempGrantDataPair: any = {};
  tempGrantDataPair[USED_STRINGS.PROJECT_NAME] = projectName;
  tempProjectData.forEach((item, index) => {
    const splitData = item.trim().toLowerCase().split(': ');

    if (index === 1) {
      tempGrantDataPair[splitData[0]] = `${splitData[1]} ${
        splitData[2] || ''
      }`.trim();
      return;
    } else if (index === 2) {
      tempGrantDataPair[USED_STRINGS.LEVEL] =
        `${splitData[1]} ${splitData[2] || ''}`.trim() || '';
      return;
    }
    tempGrantDataPair[splitData[0].toLowerCase()] = splitData[1];
  });

  return tempGrantDataPair;
};

/**
 * parse the code repo links
 * @param mdDataStrings
 * @returns
 */
const getTeamCodeRepo = (mdDataStrings: string[]) => {
  // extract the team code repos data
  const teamCodeRepos = [];

  const teamCodeRepoIndex = mdDataStrings.indexOf(USED_STRINGS.TEAM_CODE_REPOS);
  for (let i = teamCodeRepoIndex + 1; i < mdDataStrings.length; i++) {
    const element = mdDataStrings[i];
    if (element.includes(GITHUB_URL)) teamCodeRepos.push(element);
    else break;
  }

  return teamCodeRepos;
};

/**
 * parse the payment currency, ammount and project level
 * @param pairData
 */
const parseCostRelatedData = (pairData: any) => {
  // extract the currency and amount from joint string
  let [amount, currency] = pairData[USED_STRINGS.TOTAL_COSTS]
    ? pairData[USED_STRINGS.TOTAL_COSTS].split(' ')
    : pairData[USED_STRINGS.TOTAL_COST]
    ? pairData[USED_STRINGS.TOTAL_COST].split(' ')
    : ['', ''];

  // parse the currency
  currency = amount ? (amount.includes('$') ? USED_STRINGS.USD : currency) : '';
  // parse the amount
  amount = amount
    ? amount.replace(/[$,]/g, '')
    : pairData[USED_STRINGS.TOTAL_COSTS]
    ? pairData[USED_STRINGS.TOTAL_COST]
    : '';

  return { amount, currency };
};

/**
 * get the project level
 * @param currency
 * @param amount
 * @param pairData
 * @returns
 */
const getLevel = (currency: string, amount: number, levelStr: string) => {
  // calculate the project level
  let level = '';
  const amountNum = Number(amount);

  if (
    (amountNum && currency !== USED_STRINGS.BTC && Number(levelStr) > 3) ||
    !Number(levelStr)
  ) {
    if (amountNum <= BUDGETS.L1) level = LEVELS.L1;
    else if (amountNum <= BUDGETS.L2) level = LEVELS.L2;
    else if (amountNum > BUDGETS.L2) level = LEVELS.L3;
    else level = '';
  } else level = levelStr;

  return level;
};

/**
 * load old data from grant and milestone repo
 */

/**
 * It is used for extracting and parsing the all merged metadata files data
 * @param mdDetails it may contain url to download md file data or md file data itself
 * @param mergedPullRequests
 * @returns
 */
export const parseMetaDataFile = async (
  mdDetails: {
    downloadUrl?: string;
    mdData?: string;
    name?: string;
  },
  mergedPullRequests?: any
): Promise<any> => {
  try {
    let mdFileContent = '';

    // if the data is not present download it using the downloadUrl
    if (mdDetails.downloadUrl) {
      const reqRes = await get(mdDetails.downloadUrl);
      if (!reqRes.data)
        throw new Error('fail to download grant metadata file data.');
      mdFileContent = reqRes.data;
    } else mdFileContent = mdDetails.mdData;

    // parsed metadata file in tree structure
    const mdParsedTree = reformMDContent(mdFileContent);

    // parsed the team data, project name and milestone data
    const teamMembers = parseTeam(mdParsedTree);
    const milestones = parseMilestones(mdParsedTree);

    // split the string into array of substring chunks with whenever newline character found
    const splitDataArray = mdParsedTree.split('\n');
    const pairData = parseAndReformGrantData(splitDataArray);
    const teamCodeRepos = getTeamCodeRepo(splitDataArray);

    // extract the currency and amount from joint string
    const { amount, currency } = parseCostRelatedData(pairData);
    const level = getLevel(currency, amount, pairData[USED_STRINGS.LEVEL]);

    // create ids
    const teamId = v4();
    const projectId = v4();
    const proposalId = v4();

    // reform team data for storing
    const team: any = {
      id: teamId,
      name:
        pairData[USED_STRINGS.TEAM_NAME] ||
        pairData[USED_STRINGS.PROPOSER] ||
        '',
      members: teamMembers,
      projects: [{ projectId, status: null }]
    };

    //reform project data for saving into db
    const project: any = {
      id: projectId,
      user_github_id: null,
      start_date: mergedPullRequests
        ? mergedPullRequests[mdDetails?.name?.toLowerCase()]?.merged_at
        : '',
      file_name: mdDetails?.name?.toLowerCase(),
      payment_details: pairData[USED_STRINGS.PAYMENT_ADDRESS],
      md_content: mdFileContent,
      md_link: mdDetails?.downloadUrl,
      project_name: pairData[USED_STRINGS.PROJECT_NAME]
        ? pairData[USED_STRINGS.PROJECT_NAME].toLowerCase()
        : '',
      status: null,
      total_cost: { amount, currency },
      total_duration: pairData[USED_STRINGS.TOTAL_ESTIMATED_DURATION] || '',
      team_id: teamId,
      level: level,
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

    const proposal = {
      id: proposalId,
      repos: teamCodeRepos,
      md_link: mdDetails?.downloadUrl,
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
    log.red(`${ERROR_MESSAGES.ERROR_WHILE_PARSING_METADATA_FILE}`, err.message);
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
      const res = await get(miltestoneMds[index].download_url);

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

/**
 * is used to parse a table in an .md file into a JSON object
 * @param tableText
 * @returns
 */
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
 * get all the closed pull request data and parse it
 * @returns
 */
const getOldPullRequests = async (breakPoint: number = null) => {
  try {
    const mergedPullRequestsForAddedFiles: any = {};
    const proposals: any[] = [];

    let page = 1;
    const grantRepoPullsPath = `${DEFAULT_PATH}${GRANT_REPO}${PULLS_PATH}`;

    // get the all closed pull requests
    for (;;) {
      log.log('Old Pulls Current Page: ', page);
      // if break point is passed then break the loop at spefic page
      if (page === breakPoint) break;

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
        proposals.push(application);
      }

      // check the next page
      page++;
    }

    return { mergedPullRequestsForAddedFiles, proposals };
  } catch (err) {
    log.red(
      'Error while getting and formatting the all closed pull request data:\n',
      err
    );
    return null;
  }
};

/**
 * link and save the milestone, project and team data
 * @param grantMDFiles
 * @param milestoineMDFiles
 * @returns
 */
const linkMilestonesAndProjects = async (
  grantMDFiles: any,
  milestoineMDFiles: any,
  breakPointFiles: number = null,
  breakPointPulls: number = null
) => {
  try {
    const extractedData: any = { team: [], project: [], milestone: [] };

    // get all merged pull request data
    log.log('Getting the closed pulls for grant.');
    const mergedPullRequests = await getOldPullRequests(breakPointPulls);

    //if merge request or open pull request data not found then throw error
    if (!mergedPullRequests)
      throw new Error(ERROR_MESSAGES.WHILE_EXTRACTING_PULL_REQUEST_DATA);
    log.green('Old pulls data ready for storing and further processing.');

    let fileCounter = 1;

    // extract the data from each md
    log.log('Parsing the merged grant files...');
    for (const file of grantMDFiles) {
      log.log('Grant File Number: ', fileCounter);
      // used to parse only spefic number of files for testing purpose
      if (fileCounter === breakPointFiles) break;

      if (
        file.name === 'index.md' ||
        file.name === 'maintenance' ||
        file.name === '_category_.yml'
      )
        continue;

      // incress the file count
      fileCounter++;

      // parse the grant metadata file
      const mdData = await parseMetaDataFile(
        {
          name: file.name,
          downloadUrl: file.download_url
        },
        mergedPullRequests?.mergedPullRequestsForAddedFiles
      );

      if (!mdData.project && !mdData.team) continue;

      const speficMilestoneFiles = milestoineMDFiles.filter((item: any) =>
        item.name
          .toLowerCase()
          .startsWith(file.name.replace('.md', '').toLowerCase())
      );

      //update the status in the project data
      mdData.project.status =
        speficMilestoneFiles.length < mdData.milestones.length
          ? PROJECT_STATUS.Active
          : PROJECT_STATUS.Complete;

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
      mergedPullRequests.proposals
    );

    // if all goes right return true for acknowledegement
    return true;
  } catch (err) {
    log.error('Error while linking the projects with milestones\n', err);
    return false;
  }
};

/**
 * It loads the data of all the already merged metedata project files to database
 * this function only run when there is no project data found in database
 * @returns
 */
const loadOldData = async (
  breakPointFiles: number = null,
  breakPointPulls: number = null
) => {
  try {
    const grantFilesRepoPath = `${HTTP_METHODS.GET} ${DEFAULT_PATH}${GRANT_REPO}${CONTENT_PATH}${APPLICATION_PATH}`;
    const milestoneFilesRepoPath = `${HTTP_METHODS.GET} ${DEFAULT_PATH}${DELIVERIES_REPO}${CONTENT_PATH}${DELIVERIES_PATH}`;

    // get all grants and milestone files (*merged)
    const grantMdFiles: any = await octoConnectionHelper.octoRequest(
      grantFilesRepoPath
    );
    const milestoneMdFiles: any = await octoConnectionHelper.octoRequest(
      milestoneFilesRepoPath
    );

    // if projects and milestone meta-data file not found then return
    if (!grantMdFiles?.data && !milestoneMdFiles?.data) {
      log.red('Project Metadata and Milestone Metadata file not found');
      return false;
    }

    const oldDataLoaded = await linkMilestonesAndProjects(
      grantMdFiles.data,
      milestoneMdFiles.data,
      breakPointFiles,
      breakPointPulls
    );
    return oldDataLoaded;
  } catch (err) {
    log.red('Error while loading the old grant and milestone data:\n', err);
    return false;
  }
};

/**
 * load currently open pull requests
 */

/**
 * return true if the open pulls data loaded correctly otherwise false is returned
 * @returns boolean
 */
const loadOpenPullRequests = async () => {
  try {
    const grantOpenPullsCount = mongoDataHelper.getCount(DATA_MODELS.Proposal, {
      status: STATUS.OPEN
    });
    const milestoneOpenPullsCount = mongoDataHelper.getCount(
      DATA_MODELS.MilestoneProposal
    );

    // check count of open pulls if found then remove them and store new whenever backend restarted
    grantOpenPullsCount &&
      (await mongoDataHelper.clearCollectionsData(DATA_MODELS.Proposal, {
        status: STATUS.OPEN
      }));
    milestoneOpenPullsCount &&
      (await mongoDataHelper.clearCollectionsData(
        DATA_MODELS.MilestoneProposal
      ));

    // save the grants open pull requets
    log.log('Loading Grants Open Pull Requests...');
    const grantOpenPulls = await getGrantOpenPullsReq();

    // save the purposal data in bulk
    if (grantOpenPulls?.length) {
      await mongoDataHelper.bulkSaveData(DATA_MODELS.Proposal, grantOpenPulls);
      log.green('Grant Open Pulls Stored!');
    } else {
      log.error('fail to load open pulls data for grants');
      return false;
    }

    // save the milestones open pull requests
    log.log('Loading Milestones Open Pull Requests...');
    const miltstoneOpenPulls = await getMilestoneOpenPullsReq();

    // save the milstone proposals data
    if (miltstoneOpenPulls?.length) {
      await mongoDataHelper.bulkSaveData(
        DATA_MODELS.MilestoneProposal,
        miltstoneOpenPulls
      );

      log.green('Milestone Open Pulls Stored!');
    } else {
      log.error('fail to load open pulls data for milestones');
      return false;
    }
    return true;
  } catch (err) {
    log.error(ERROR_MESSAGES.WHILE_LOADING_OPEN_PULLS, '\n', err.message);
    return false;
  }
};

/**
 * get all the open pull request data and parse it
 * @returns
 */
const getGrantOpenPullsReq = async () => {
  try {
    let page = 1;
    const proposals: any[] = [];
    const grantRepoPullsPath = `${HTTP_METHODS.GET} ${DEFAULT_PATH}${GRANT_REPO}${PULLS_PATH}`;

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
        const resData = fileDetailsResponse?.data[0];

        if (!resData) {
          log.red('Response is empty, data skipped');
          continue;
        }

        const fileName = resData?.filename
          .replace('applications/', '')
          .toLowerCase();

        // parse the content of project proposal metadata file
        const parsedData = await parseMetaDataFile(
          {
            downloadUrl: resData.raw_url,
            name: fileName
          },
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
          team_name: parsedData?.proposal?.team_name || '',
          proposal_name: parsedData?.proposal?.proposal_name || '',
          user_github_details: {
            git_user_id: item?.user?.id || '',
            git_user_name: item?.user?.login || '',
            git_avatar_url: item?.user?.avatar_url || ''
          },
          extrected_proposal_data: JSON.stringify(parsedData)
        };
        proposals.push(proposalData);
        log.log('Pull Request No: ', item.number);
      }
      page++;
    }

    return proposals;
  } catch (err) {
    log.error('Open Pulls for Grants section issue\n', err.message);
    return null;
  }
};

/**
 * get and load milestone open pull requests
 * @returns
 */
const getMilestoneOpenPullsReq = async () => {
  try {
    const milstonePurposals: any[] = [];
    const pullRequestUrl = `${HTTP_METHODS.GET} ${DEFAULT_PATH}${DELIVERIES_REPO}${PULLS_PATH}`;

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
      const milestoneLevel = matches?.length ? parseInt(matches[1]) : 0;

      // this has the md content
      const mdContentUrl = milestonefileDetailsResponse?.data[0]?.raw_url
        ?.replace(GITHUB_REPO_PATHS.RAW_PATH, '')
        .replace(GITHUB_URL, GITHUB_USER_DATA_URL);

      // Extract and parse the table content from the Markdown content

      const res = await get(milestonefileDetailsResponse.data[0].raw_url);
      if (!res.data) return null;

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
        log.log('Pull Request No:', item.number);
        milstonePurposals.push(milestoneApplication);
      }
    }

    return milstonePurposals;
  } catch (error) {
    log.error('Open Pulls for Milestone section issue\n', error.message);
    return null;
  }
};

/**
 * load open pulls requests
 */
const openPullsLoader = async () => {
  // for stop loading open pull requests
  const loadOpenPulls = !!Number(process.env.NOT_LOAD_OPEN_PULLS);
  const milestoneProposalCount = await mongoDataHelper.getCount(
    DATA_MODELS.MilestoneProposal
  );

  // check if NOT_LOAD_OPEN_PULLS set or milestone proposal is empty or not
  if (loadOpenPulls && milestoneProposalCount) return;

  // load the open pulls data
  const isOpenPullsLoaded = await loadOpenPullRequests();
  isOpenPullsLoaded
    ? log.green('Open pulls successfully stored in DB')
    : log.error(
        'open pulls requests data not loaded correctly due to some issue'
      );
};

/**
 * load the inital old and new data from milestones and grants repo
 */
export const loadInitialData = async () => {
  try {
    //check if there is already data loaded inside mongo
    const projectCount = await mongoDataHelper.getCount(DATA_MODELS.Project);
    log.log('Projects Count: ', projectCount);

    // first try to load data from file
    if (!projectCount) {
      if (!process.env.NO_FILE) {
        const isDataLoaded = await loadDataFromJsonFile();
        if (isDataLoaded) {
          await openPullsLoader();
          return;
        }
      }
    } else {
      await openPullsLoader();
      return;
    }

    // load old data from github api if there is not data files or NO_FILE flag enabled
    log.log('Old Data Loading Started...');

    // for testing the data load with small number of data using break points
    const breakPointFiles = Number(process.env.BREAK_PF) || 0;
    const breakPointPulls = Number(process.env.BREAK_PP) || 0;
    const isOldDataLoaded = await loadOldData(breakPointFiles, breakPointPulls);

    isOldDataLoaded
      ? log.green('Old Data Successfully Stored')
      : log.error(
          'old grants and milestone data not loaded correctly due to some issue'
        );
  } catch (err) {
    log.error(ERROR_MESSAGES.WHILE_LOADING_INITIAL_DATA, '\n', err);
  }
};
