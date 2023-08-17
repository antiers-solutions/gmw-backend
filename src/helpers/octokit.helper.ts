import parsedMdFile from './mdParse.helper';
import axios from 'axios';
import octoConnectionHelper from './octoConnection.helper';
import mongoDataHelper from './mongo.data.helper';
import { DATA_MODELS, ERROR_MESSAGES, STATUS } from '../constants';
import { v4 } from 'uuid';
import { log } from '../utils/helper.utils';

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
 * It gets all the closed pull request data and parse it
 * @returns
 */
const getPullRequestDetails = async () => {
  try {
    const mergedPullRequestsForAddedFiles: any = {};
    const purposals: any[] = [];
    const pages = Number(process.env.GITHUB_PULLREQUEST_PAGES) || 17;

    // get all closed pull request and filter the merged only for added new files
    for (let page = 1; page <= pages; page++) {
      // get the all merged data
      const pullRequestsResponse = await octoConnectionHelper.octoRequest(
        'GET /repos/w3f/Grants-Program/pulls',
        {
          state: 'closed',
          base: 'master',
          per_page: 100,
          page
        }
      );

      const pullRequests = pullRequestsResponse?.data;
      if (!pullRequests) continue;

      // get the pull request file data using the pull request number
      for (const item of pullRequests) {
        //if pull is not merged then skip it

        const repoPath =
          process.env.GITHUB_REPO_PATH || '/repos/w3f/Grants-Program/pulls';

        // get the file data for pull request using the pull request number
        const fileDetailsResponse = await octoConnectionHelper.octoRequest(
          `GET ${repoPath}/${item.number}/files`,
          {
            state: 'closed',
            base: 'master',
            direction: 'desc',
            head: `w3f:${''}`
          }
        );

        // get the reviwers details
        const reviwers = await octoConnectionHelper.octoRequest(
          `GET ${repoPath}/${item.number}/reviews`,
          {
            state: 'closed',
            base: 'master',
            direction: 'desc',
            head: `w3f:${''}`
          }
        );

        const approvals = reviwers?.data?.filter(
          (reviwer: any) => reviwer.state === 'APPROVED'
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
        fileData.indexOf('Team members'),
        fileData.indexOf('Contact') > 0
          ? fileData.indexOf('Contact')
          : fileData.indexOf('Team Website')
      )
      .split('\n');
    teamMember.shift();
    teamMember.pop();

    // extract the milestone data
    const mileStoneTable = [];
    for (let i = 1; i <= 10; i++) {
      const start = fileData.indexOf(`Milestone ${i} `);
      const end = fileData.indexOf(`Milestone ${i + 1} `);

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
        if (innerItem[0] === 'estimated duration')
          tempMilestoneStore[innerItem[0]] = innerItem[1];
        if (innerItem[0] === 'fte')
          tempMilestoneStore[innerItem[0]] = innerItem[1];
        if (innerItem[0] === 'costs' || innerItem[0] === 'cost')
          tempMilestoneStore['costs'] = innerItem[1];
      });
      milestones[index] = tempMilestoneStore;
    });

    const tempProjectData = splitDataArray
      .filter((item) => item.startsWith('**'))
      .join('\n')
      .replace(/\*\*/g, '')
      .split('\n');

    const pairData: any = {};
    pairData['project name'] = projectName;
    tempProjectData.forEach((item, index) => {
      const splitData = item.trim().toLowerCase().split(': ');

      if (index === 1) {
        pairData[splitData[0]] = `${splitData[1]} ${splitData[2] || ''}`.trim();
        return;
      } else if (index === 2) {
        pairData['level'] =
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
      name: pairData['team name'] || pairData['purposer'] || '',
      members: teamMember,
      projects: [{ projectId, status: null }]
    };

    // extract the currency and amount from joint string
    let [amount, currency] = pairData['total costs']
      ? pairData['total costs'].split(' ')
      : pairData['total cost']
      ? pairData['total cost'].split(' ')
      : ['', ''];
    currency = amount ? (amount.includes('$') ? 'usd' : currency) : '';
    amount = amount
      ? amount.replace(/[$,]/g, '')
      : pairData['total costs']
      ? pairData['total cost']
      : '';

    const amountNum = Number(amount);
    if (
      (amountNum && currency !== 'btc' && Number(pairData['level']) > 3) ||
      !Number(pairData['level'])
    ) {
      if (amountNum <= 10000) pairData['level'] = '1';
      else if (amountNum <= 50000) pairData['level'] = '2';
      else if (amountNum > 50000) pairData['level'] = '3';
      else pairData['level'] = '';
    }

    const project: any = {
      id: projectId,
      user_github_id: null,
      start_date: mergedPullRequests[mdDetails?.name?.toLowerCase()]?.mergedAt,
      file_name: mdDetails?.name?.toLowerCase(),
      payment_details: pairData['payment address'],
      md_content: res?.data,
      md_link: mdDetails?.download_url,
      project_name: pairData['project name']
        ? pairData['project name'].toLowerCase()
        : '',
      status: null,
      total_cost: { amount, currency },
      total_duration: pairData['total estimated duration'] || '',
      team_id: teamId,
      level: pairData['level'],
      html_url: mdDetails?.html_url,
      legal_structure: {
        registered_address: pairData['registered address'] || '',
        registered_legal_entity: pairData['registered legal entity'] || ''
      },
      totalMilestones: milestones.length,
      milestones: []
    };

    return { project, team, milestones };
  } catch (err) {
    log.red('Error while parsing the metadata files: ', err);
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
