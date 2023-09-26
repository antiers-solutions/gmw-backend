import axios from 'axios';
import { v4 } from 'uuid';
import { GITHUB_ACTIONS, STATUS } from '../constants';
import { DATA_MODELS } from '../constants';
import MongoDataHelper from '../helpers/mongo.data.helper';
import { parseMetaDataFile } from '../helpers/octokit.helper';
import octoConnectionHelper from '../helpers/octoConnection.helper';
import mongoDataHelper from '../helpers/mongo.data.helper';

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
      if (requestBody?.pull_request) {
        const { pull_request } = requestBody;
        const repoPath = `${process.env.GITHUB_REPO_DELIVERY_MY_TEST}`;
        // console.log(
        //   'this is the open pull request',
        //   requestBody?.pull_request,
        //   'this is the open pull request'
        // );
        // console.log('acion', requestBody.action, 'action');

        // extract the all required data from the incoming open PR and store it into the DB in proposal milestones

        const prNumber = pull_request?.number;
        const prLink = pull_request?.url;
        const state = pull_request?.state;
        const createdAt = pull_request?.body?.created_at;
        const updatedAt = pull_request?.updated_at;
        const userDetails = {
          git_user_name: pull_request?.user?.login,
          git_user_id: pull_request?.user?.id,
          git_avatar: pull_request?.user?.avatar_url
        };
        const assignee_details: any = [];

        // get the file data for pull request using the pull request number
        const MilestonefileDetailsResponse =
          await octoConnectionHelper.octoRequest(
            `GET /${repoPath}/${prNumber}/files`,
            {
              // state: 'open'
            }
          );

        console.log(MilestonefileDetailsResponse, 'sdsdsdsdsdsds');

        const fileName = MilestonefileDetailsResponse?.data[0]?.filename
          .replace('deliveries/', '')
          .toLowerCase();

        const res = await axios.get(
          MilestonefileDetailsResponse?.data[0]?.raw_url
        );

        const regex = /(\d+)\.md$/;
        const matches = fileName.match(regex) ? fileName.match(regex) : 0;
        const milestoneLevel = matches[1] ? parseInt(matches[1]) : 0;

        // this has the md content

        const mdContentUrl = MilestonefileDetailsResponse?.data[0]?.raw_url;

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
        console.log('parts: ', parts);

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
          md_content_url: mdContentUrl || '',
          md_link: null,
          created_at: createdAt,
          updated_at: updatedAt,
          reviewers: [],
          repos: [],
          assignee_details: []
        };

        console.log(milestoneApplication, 'from the hook');

        await mongoDataHelper.savaData(
          DATA_MODELS.MilestoneProposal,
          milestoneApplication
        );

        if (requestBody.action === GITHUB_ACTIONS.synchronize) {
          const fileDetailsResponse = await octoConnectionHelper.octoRequest(
            `GET ${repoPath}/${pull_request?.number}/files`,
            {
              state: 'open',
              base: 'master',
              direction: 'desc',
              head: `w3f:${''}`
            }
          );

          console.log('This is for the file changes', fileDetailsResponse);
          // extract the url
          // update it in the DB using the pr number or link
        }

        // handling all the reviewer in this section for the open PRs
        if (
          requestBody.action === GITHUB_ACTIONS.review_requested ||
          requestBody.action === GITHUB_ACTIONS.review_request_removed
        ) {
          // store the new reviewers
          // update it in the DB using the pr number or link
          const reviewers = pull_request?.requested_reviewers;
          console.log(
            'This is for the changed reviewers',
            pull_request?.requested_reviewers
          );

          await mongoDataHelper.updateData(
            DATA_MODELS.MilestoneProposal,
            {
              pr_link: prLink
            },
            {
              reviewers: reviewers
            }
          );
        }

        if (
          requestBody.action === GITHUB_ACTIONS.assigned ||
          requestBody.action === GITHUB_ACTIONS.unassigned
        ) {
          console.log('this is for the assigness', pull_request?.assignees);

          // store the new assignee
          // update it in the DB using the pr number or link
          const assignee_details = pull_request?.assignees.map((data: any) => ({
            git_user_id: data?.id || '',
            git_user_name: data?.login || '',
            git_avatar_url: data?.avatar_url || ''
          }));

          await mongoDataHelper.updateData(
            DATA_MODELS.MilestoneProposal,
            {
              pr_link: prLink
            },
            {
              assignee_details: assignee_details
            }
          );
        }

        if (pull_request?.merged === true) {
          console.log(
            'then move the file from proposals milestone to accepted milestone and delete from the proposals section'
          );

          // get all the data from the db using the pr number
          // save it into the collection of milestones
          // remove it from the milestone proposals
          const data = await mongoDataHelper.findAndQueryData(
            DATA_MODELS.MilestoneProposal,
            { pr_link: prLink }
          );

          console.log(data, 'this is the data');

          const projectsData = await mongoDataHelper.findAndQueryData(
            DATA_MODELS.Project,
            { file_name: data[0]?.application_name }
          );

          const projectId = projectsData[0]?.id;

          // const milestoneMerged = {
          //   id: v4(),
          //   file_name: data[0]?.fileName,
          //   user_github_id: null,
          //   user_github_details: data[0]?.userDetails,
          //   project_md_link: projectLink ? data[0]?.projectLink : '',
          //   project_id: projectId,
          //   md_content_url: data[0]?.mdContentUrl || '',
          //   merged_at: pull_request?.merged_at || ''
          // };

          const milestoneMerged = {
            id: v4(),
            file_name: fileName,
            user_github_id: null,
            user_github_details: userDetails,
            project_md_link: projectLink ? data[0]?.projectLink : '',
            status: 'complete',
            milestoneNo: milestoneLevel,
            project_id: projectId,
            md_content_url: mdContentUrl || '',
            merged_at: pull_request?.merged_at || ''
          };

          console.log(milestoneMerged, 'from the merged hook');

          await mongoDataHelper.savaData(
            DATA_MODELS.Milestone,
            milestoneMerged
          );

          await mongoDataHelper.deleteData(DATA_MODELS.MilestoneProposal, {
            pr_link: prLink
          });
        }

        if (
          pull_request?.merged === false &&
          pull_request?.status === GITHUB_ACTIONS.closed
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

          await mongoDataHelper.deleteData(DATA_MODELS.MilestoneProposal, {
            pr_link: prLink
          });

          console.log('Then do the status as rejected and ');
          // just update the status of the milestone as rejected
          // and then delete it from the milestone
        }
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
   * It merges the open pull requests
   * @param pullRequestNumber
   * @returns
   */
  public mergePullRequest = async (pullRequestNumber: string) => {
    try {
      const headers = {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN_CLASSIC}`
      };
      const apiUrl = `${process.env.GITHUB_PULL_REQUEST_URL}/pulls/${pullRequestNumber}/merge`;
      await axios.put(apiUrl, {}, { headers });
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
