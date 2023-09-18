import axios from 'axios';
import { v4 } from 'uuid';
import { STATUS } from '../constants';
import { DATA_MODELS } from '../constants';
import MongoDataHelper from '../helpers/mongo.data.helper';
import { parseMetaDataFile } from '../helpers/octokit.helper';

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
  public saveGithubData = async (event: string, requestBody: any) => {
    try {
      if (requestBody?.pull_request) {
        const { pull_request } = requestBody;
        const { url } = pull_request;

        const response: any = await axios.get(`${url}/files`);
        const element = response?.data[0];

        if (element?.filename.search('applications/') !== -1) {
          const fileName = element.filename.split('/')[1];

          //check if data is for merged request
          if (pull_request?.merged) {
            console.log('saving merged pull request data into Db..');
            const dataRes: any = await MongoDataHelper.findAndQueryData(
              DATA_MODELS.Proposal,
              { file_name: fileName }
            );

            if (dataRes.length > 0) {
              const { project, team } = JSON.parse(
                dataRes[0]?.extrected_proposal_data
              );

              project.merged_at = pull_request.merged_at;

              //save or update the saved Project data
              await MongoDataHelper.findOneAndUpdate(
                DATA_MODELS.Project,
                { file_name: project.file_name },
                project
              );

              //save or update the saved Team data
              await MongoDataHelper.findOneAndUpdate(
                DATA_MODELS.Team,
                { name: team.name },
                team
              );

              // change status of project
              await MongoDataHelper.findOneAndUpdate(
                DATA_MODELS.Proposal,
                { file_name: fileName },
                { status: STATUS.ACCEPTED }
              );

              return {
                error: false,
                data: 'success'
              };
            } else {
              throw new Error('Proposal in not present in the collection');
            }
          } else {
            console.log('saving pull request data into Db..');

            if (event === 'pull_request_review') {
              const dataRes: any = await MongoDataHelper.findAndQueryData(
                DATA_MODELS.Proposal,
                { pr_link: pull_request?.html_url }
              );
              dataRes[0].approvals = dataRes[0].approvals + 1;

              await MongoDataHelper.updateData(
                DATA_MODELS.Proposal,
                { pr_link: pull_request?.html_url },
                { approvals: dataRes[0].approvals }
              );
            } else {
              const responseData: any = await axios.get(
                `${element?.contents_url}`
              );
              let dataRes = await parseMetaDataFile(responseData?.data, {
                [fileName]: { mergedAt: null }
              });
              const { proposal } = dataRes;
              const assignees = pull_request?.assignees.map((data: any) => ({
                id: data?.id || '',
                login: data?.login || ''
              }));
              // save the purposal data
              const dataToSave: any = {
                assignees,
                team_name: proposal?.team_name,
                status: STATUS.OPEN,
                pr_link: pull_request?.html_url,
                updated_at: pull_request.updated_at,
                created_at: pull_request.created_at,
                proposal_name: proposal.proposal_name,
                file_name: dataRes?.project?.file_name,
                extrected_proposal_data: JSON.stringify(dataRes),
                id: proposal?.id,
                md_link: proposal?.md_link,
                approvals: 0,
                repos: proposal.repos,
                user_github_id: {
                  id: pull_request?.user?.id || '',
                  login: pull_request?.user?.login
                }
              };

              await MongoDataHelper.findOneAndUpdate(
                DATA_MODELS.Proposal,
                { pr_link: dataToSave.pr_link },
                dataToSave
              );
              dataRes = null;

              return {
                error: false,
                data: null
              };
            }
          }
        } else {
          throw new Error('Changes are not in the applications/ directory');
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

export default GithubHookHelper.getInstance();
