import axios from 'axios';
import {
  GITHUB_REPO_PATHS,
  GITHUB_URL,
  PROJECT_STATUS,
  STATUS,
  GITHUB_ACTIONS
} from '../constants';
import { DATA_MODELS } from '../constants';
import MongoDataHelper from '../helpers/mongo.data.helper';
import { parseMetaDataFile } from '../helpers/octokit.helper';
import { log } from '../utils/helper.utils';

class GithubHookHelper {
  static instance: GithubHookHelper = null;

  static getInstance = () => {
    if (!GithubHookHelper.instance) {
      GithubHookHelper.instance = new GithubHookHelper();
      delete GithubHookHelper.constructor;
    }
    return GithubHookHelper.instance;
  };

  /**
   * helper for saving the github hook data for merged pull request or new pull request
   * @param requestBody
   * @returns
   */
  public saveGithubData = async (_event: string, requestBody: any) => {
    try {
      const { pull_request } = requestBody;
      const { url } = pull_request;

      const response: any = await axios.get(`${url}/files`);
      const element = response?.data[0];

      if (element?.filename.search('applications/') !== -1) {
        const fileName = element.filename.split('/')[1];

        switch (requestBody.action) {
          case GITHUB_ACTIONS.closed: {
            if (pull_request?.merged) {
              console.log('saving merged pull request data into Db..');

              const dataRes: any = await MongoDataHelper.findAndQueryData(
                DATA_MODELS.Proposal,
                { pr_link: pull_request.html_url }
              );

              if (dataRes.length > 0) {
                const { project, team } = JSON.parse(
                  dataRes[0]?.extrected_proposal_data
                );

                project.start_date = pull_request.merged_at;
                project.status = PROJECT_STATUS.Active;
                project.user_github_details = {
                  git_user_id: pull_request?.id || '',
                  git_user_name: pull_request?.login || '',
                  git_avatar_url: pull_request?.avatar_url || ''
                };

                await MongoDataHelper.savaData(DATA_MODELS.Project, project);

                //save or update the saved Team data
                await MongoDataHelper.savaData(DATA_MODELS.Team, team);

                // change status of project
                await MongoDataHelper.updateData(
                  DATA_MODELS.Proposal,
                  { pr_link: pull_request.html_url },
                  { status: STATUS.ACCEPTED }
                );
                break;
              } else {
                throw new Error('Proposal in not present in the collection');
              }
            } else {
              console.log('Pull request Closed ... ');

              await MongoDataHelper.updateData(
                DATA_MODELS.Proposal,
                { pr_link: pull_request?.html_url },
                { status: STATUS.REJECTED }
              );
            }
            break;
          }

          case GITHUB_ACTIONS.review_requested:
          case GITHUB_ACTIONS.review_request_removed: {
            console.log('reviewer added or removed....');
            const reviewers = pull_request.requested_reviewers.map(
              (review: any) => ({
                reviewer_user_name: review?.login,
                reviewer_id: review?.id,
                reviewer_avatar_url: review?.avatar_url || ''
              })
            );

            await MongoDataHelper.updateData(
              DATA_MODELS.Proposal,
              { pr_link: pull_request?.html_url },
              { reviewers }
            );
            break;
          }

          case GITHUB_ACTIONS.opened: {
            console.log('new Pull request ..... ');

            const responseData: any = await axios.get(
              `${element?.contents_url}`
            );
            let dataRes = await parseMetaDataFile(responseData?.data, {
              [fileName]: { mergedAt: null }
            });

            const assignees = pull_request?.assignees.map((data: any) => ({
              git_user_id: data?.id || '',
              git_user_name: data?.login || '',
              git_avatar_url: data?.avatar_url || ''
            }));

            // save the purposal data
            const dataToSave: any = {
              assignees,
              status: STATUS.OPEN,
              id: dataRes?.proposal?.id,
              repos: dataRes?.proposal?.repos,
              pr_link: pull_request?.html_url,
              updated_at: pull_request?.updated_at,
              created_at: pull_request?.created_at,
              file_name: dataRes?.project?.file_name,
              team_name: dataRes?.proposal?.team_name,
              reviewers: pull_request.requested_reviewers,
              proposal_name: dataRes?.proposal?.proposal_name,
              milestones: dataRes?.milestones || [],
              extrected_proposal_data: JSON.stringify({
                project: dataRes.project,
                team: dataRes.team
              }),
              md_link: dataRes?.proposal?.md_link,
              user_github_details: {
                git_user_id: pull_request?.id || '',
                git_user_name: pull_request?.login || '',
                git_avatar_url: pull_request?.avatar_url || ''
              }
            };

            await MongoDataHelper.savaData(DATA_MODELS.Proposal, dataToSave);
            dataRes = null;
            break;
          }

          case GITHUB_ACTIONS.synchronize:
          case GITHUB_ACTIONS.edited: {
            console.log('new Pull request edited or synchronized ..... ');

            const responseData: any = await axios.get(
              `${element?.contents_url}`
            );
            const dataRes = await parseMetaDataFile(responseData?.data, {
              [fileName]: { mergedAt: null }
            });

            const dataToUpdate = {
              repos: dataRes?.proposal?.repos,
              updated_at: pull_request?.updated_at,
              team_name: dataRes?.proposal?.team_name,
              proposal_name: dataRes?.proposal?.proposal_name,
              extrected_proposal_data: JSON.stringify(dataRes)
            };

            await MongoDataHelper.updateData(
              DATA_MODELS.Proposal,
              { pr_link: pull_request?.html_url },
              dataToUpdate
            );
            break;
          }

          case GITHUB_ACTIONS.assigned:
          case GITHUB_ACTIONS.unassigned: {
            console.log('assignees  added or removed ... ');

            const assignees = pull_request?.assignees.map((data: any) => ({
              git_user_id: data?.id || '',
              git_user_name: data?.login || '',
              git_avatar_url: data?.avatar_url || ''
            }));

            await MongoDataHelper.updateData(
              DATA_MODELS.Proposal,
              { pr_link: pull_request?.html_url },
              { assignees }
            );
            break;
          }

          case GITHUB_ACTIONS.reopened: {
            console.log('Pull request Reopened ... ');

            await MongoDataHelper.updateData(
              DATA_MODELS.Proposal,
              { pr_link: pull_request?.html_url },
              { status: STATUS.OPEN }
            );
            break;
          }
        }

        return {
          error: false,
          data: 'success'
        };
      } else {
        throw new Error('Changes are not in the applications/ directory');
      }
    } catch (error) {
      console.error(
        'error while getting github pull or merge request data : ',
        error.message
      );
      return {
        error: true,
        data: null
      };
    }
  };

  /**
   * merge the open pull request
   * @param pullRequestNumber
   * @returns
   */
  public mergePullRequest = async (pullRequestNumber: string) => {
    try {
      //Need to change the process of authorization
      const headers = {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN_CLASSIC}`
      };
      const mergeUrl = `${GITHUB_URL}${GITHUB_REPO_PATHS.GRANT_REPO}${GITHUB_REPO_PATHS.PULLS_PATH}/${pullRequestNumber}${GITHUB_REPO_PATHS.MERGE_PATH}`;
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
      log.error(
        'error while getting github pull or merge request data: ',
        error.message
      );
      return {
        error: true,
        data: null
      };
    }
  };
}

export default GithubHookHelper.getInstance();
