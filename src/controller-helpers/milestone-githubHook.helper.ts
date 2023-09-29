import axios from 'axios';
import { v4 } from 'uuid';
import MongoDataHelper from '../helpers/mongo.data.helper';
import octoConnectionHelper from '../helpers/octoConnection.helper';
import mongoDataHelper from '../helpers/mongo.data.helper';
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
  GITHUB_USER_DATA_URL,
  GITHUB_ACTIONS
} from '../constants';

class MilestoneGithubHookHelper {
  static instance: MilestoneGithubHookHelper = null;

  static getInstance = () => {
    if (!MilestoneGithubHookHelper.instance) {
      MilestoneGithubHookHelper.instance = new MilestoneGithubHookHelper();
      delete MilestoneGithubHookHelper.constructor;
    }
    return MilestoneGithubHookHelper.instance;
  };

  /**
   * helper for saving the github hook data for merged pull request or new pull request
   * @param requestBody
   * @returns
   */
  public saveGithubData = async (requestBody: any) => {
    try {
      // this is the incoming request
      if (requestBody?.pull_request) {
        const { pull_request } = requestBody;
        const prLink = pull_request?.url;
        const state = pull_request?.state; // to check if state is open or close
        const repoPath = `${process.env.GITHUB_REPO_DELIVERY_MY_TEST}`;
        const prNumber = pull_request?.number;

        // this is the file changes reponse of the open PR using octokit
        const milestonefileDetailsResponse =
          await octoConnectionHelper?.octoRequest(
            `GET ${repoPath}/${prNumber}/files`
          );

        // this has the md content
        const mdContentUrlMain = milestonefileDetailsResponse?.data[0]?.raw_url
          ?.replace(GITHUB_REPO_PATHS.RAW_PATH, '')
          .replace(GITHUB_URL, GITHUB_USER_DATA_URL);

        // if the pr is already stored in the db then move it to the else section
        // if the pr is alreday stored but the state is 'closed' then update the status to close and dont perfom any operations

        const dbCheck =
          (await mongoDataHelper.findAndQueryData(
            DATA_MODELS.MilestoneProposal,
            { pr_link: pull_request?.url }
          )) || [];
        const prLinkCheck = dbCheck.length ? dbCheck[0]?.pr_link : '';
        if (
          prLink === prLinkCheck &&
          state === GITHUB_ACTIONS.closed &&
          !pull_request?.merged
        ) {
          const data = await mongoDataHelper.updateData(
            DATA_MODELS.MilestoneProposal,
            { id: dbCheck[0]?.id },
            { status: 'closed' }
          );
        } else if (prLink !== prLinkCheck) {
          console.log('This is a new pull request');
          // extract the all required data from the incoming open PR and store it into the DB in proposal milestones
          const prNumber = pull_request?.number;
          const createdAt = pull_request?.body?.created_at;
          const updatedAt = pull_request?.updated_at;
          const userDetails = {
            git_user_name: pull_request?.user?.login,
            git_user_id: pull_request?.user?.id,
            git_avatar: pull_request?.user?.avatar_url
          };

          // ################for further use will be removed###############
          // // get the file data for pull request using the pull request number
          // const milestonefileDetailsResponse =
          //   await octoConnectionHelper.octoRequest(
          //     `GET /${repoPath}/${prNumber}/files`
          //   );

          const fileName = milestonefileDetailsResponse?.data[0]?.filename
            .replace('deliveries/', '')
            .toLowerCase();

          const res = await axios.get(
            milestonefileDetailsResponse?.data[0]?.raw_url
          );

          const regex = /(\d+)\.md$/;
          const matches = fileName.match(regex) ? fileName.match(regex) : 0;
          const milestoneLevel = matches[1] ? parseInt(matches[1]) : 0;

          // ################for further use will be removed###############
          // // this has the md content
          // const mdContentUrl = milestonefileDetailsResponse?.data[0]?.raw_url
          //   ?.replace(GITHUB_REPO_PATHS.RAW_PATH, '')
          //   .replace(GITHUB_URL, GITHUB_USER_DATA_URL);

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

          const parts = projectLink?.trim()?.length
            ? projectLink?.split('/')
            : null;

          const applicationName = parts?.length ? parts[parts?.length - 1] : '';

          const milestoneApplication = {
            id: v4(),
            pr_link: prLink,
            pr_number: prNumber,
            status: state,
            file_name: fileName,
            user_github_details: userDetails,
            project_md_link: projectLink ? projectLink : '',
            milestone_level: Number(milestoneLevel),
            application_name: applicationName || '',
            md_content_url: mdContentUrlMain || '',
            md_link: null,
            created_at: createdAt,
            updated_at: updatedAt,
            reviewers: [],
            repos: [],
            assignee_details: []
          };

          await mongoDataHelper.saveData(
            DATA_MODELS.MilestoneProposal,
            milestoneApplication
          );
        } else {
          console.log('This is the else section');
          const res = await mongoDataHelper.updateData(
            DATA_MODELS.MilestoneProposal,
            { id: dbCheck[0]?.id },
            { status: 'open' }
          );

          if (requestBody.action === GITHUB_ACTIONS.synchronize) {
            // extract the url
            // update it in the DB using the pr number or link
            await mongoDataHelper.updateData(
              DATA_MODELS.MilestoneProposal,
              {
                pr_link: prLink
              },
              {
                md_content_url: mdContentUrlMain
              }
            );
          }

          // handling all the reviewer in this section for the open PRs
          if (
            requestBody.action === GITHUB_ACTIONS.review_requested ||
            requestBody.action === GITHUB_ACTIONS.review_request_removed
          ) {
            // store the new reviewers
            // update it in the DB using the pr number or link

            const reviewers = pull_request?.requested_reviewers.map(
              (data: any) => ({
                reviewer_id: data?.id || '',
                reviewer: data?.login || '',
                reviewer_avatar: data?.avatar_url || ''
              })
            );
            const update = {
              $push: { reviewers: reviewers }
            };

            const data = await mongoDataHelper.updateData(
              DATA_MODELS.MilestoneProposal,
              {
                pr_link: prLink
              },
              update
            );
          }

          if (
            requestBody.action === GITHUB_ACTIONS.assigned ||
            requestBody.action === GITHUB_ACTIONS.unassigned
          ) {
            // store the new assignee
            // update it in the DB using the pr number or link
            const assignee_details = pull_request?.assignees.map(
              (data: any) => ({
                git_user_id: data?.id || '',
                git_user_name: data?.login || '',
                git_avatar_url: data?.avatar_url || ''
              })
            );

            const update = {
              $push: { assignee_details: assignee_details } // Replace myArray with your array field name
            };

            await mongoDataHelper.updateData(
              DATA_MODELS.MilestoneProposal,
              {
                pr_link: prLink
              },
              update
            );
          }

          if (pull_request?.merged === true) {
            console.log(
              'then move the file from proposals milestone to accepted milestone and delete from the proposals section'
            );

            // get all the data from the db using the pr number
            // save it into the collection of milestones
            // remove it from the milestone proposals
            const data = dbCheck;
            const projectsData =
              (await mongoDataHelper.findAndQueryData(DATA_MODELS.Project, {
                file_name: data[0]?.application_name
              })) || [];

            const projectId = projectsData[0]?.id || '';

            // getting the milestones array of the project stored
            const milestones = data[0]?.id || '';

            // // pushing the latest milestone merged id to link it with eachother
            const update = {
              $push: { milestones: milestones }
            };

            const check = await mongoDataHelper.updateData(
              DATA_MODELS.Project,
              { id: projectId },
              update
            );

            const milestoneMerged = {
              id: data[0]?.id,
              file_name: data[0]?.file_name,
              user_github_id: data[0]?.user_github_details[0]?.git_user_id,
              user_github_details: data[0]?.user_github_details,
              project_md_link: data[0]?.project_md_link || '',
              project_id: projectId || '',
              md_content_url: data[0]?.md_content_url || '',
              merged_at: pull_request?.merged_at || ''
            };

            const check1 = await mongoDataHelper.saveData(
              DATA_MODELS.Milestone,
              milestoneMerged
            );

            // console.log(check1, 'this is check 1');

            const check2 = await mongoDataHelper.deleteData(
              DATA_MODELS.MilestoneProposal,
              {
                pr_link: prLink
              }
            );

            // console.log(check2, 'this is the check 2');
          }

          if (
            pull_request?.merged === false &&
            pull_request?.status === 'closed'
          ) {
            await mongoDataHelper.updateData(
              DATA_MODELS.MilestoneProposal,
              {
                pr_link: prLink
              },
              {
                status: 'Rejected'
              }
            );
            // just update the status of the milestone as rejected
            // and then delete it from the milestone
            await mongoDataHelper.deleteData(DATA_MODELS.MilestoneProposal, {
              pr_link: prLink
            });
          }
        }
        return {
          error: false,
          data: null
        };
      }
    } catch (error) {
      console.error(
        'error while getting github pull or merge request data : ',
        error
      );
      return {
        error: true,
        data: null
      };
    }
  };

  /**
   * merge the pull request of milestones repo
   * @param pullRequestNumber
   * @returns
   */
  public mergePullRequest = async (pullRequestNumber: string) => {
    try {
      //Need to change the process of authorization
      const headers = {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN_CLASSIC}`
      };
      const mergeUrl = `${GITHUB_URL}${GITHUB_REPO_PATHS.DELIVERIES_REPO}${GITHUB_REPO_PATHS.PULLS_PATH}/${pullRequestNumber}${GITHUB_REPO_PATHS.MERGE_PATH}`;
      await axios.put(mergeUrl, {}, { headers });
      const searchResult = await MongoDataHelper.findAndQueryData(
        DATA_MODELS.Proposal,
        {}
      );

      return {
        error: false,
        data: searchResult
      };
    } catch (error) {
      console.error(
        'error while getting github pull or merge request data : ',
        error
      );
      return {
        error: true,
        data: null
      };
    }
  };
}

export default MilestoneGithubHookHelper.getInstance();
