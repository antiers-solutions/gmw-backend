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

  public getGithubData = async (requestBody: any) => {
    try {
      if (requestBody?.pull_request) {
        const { pull_request } = requestBody;
        const { url } = pull_request;
        // console.log('pull_request ::: ', pull_request);

        const response: any = await axios.get(`${url}/files`);
        const element = response?.data[0];

        //check if data is for merged request
        if (pull_request?.merged) {
          if (element?.filename.search('applications/') !== -1) {
            const fileName = element.filename.split('/')[1];

            const dataRes: any = await MongoDataHelper.findAndQueryData(
              DATA_MODELS.Proposal,
              { file_name: fileName }
            );
            if (dataRes.length > 0) {
              const { project, team } = JSON.parse(
                dataRes[0]?.extrected_proposal_data
              );

              project.merged_at = pull_request.merged_at;

              console.log('project : ', project);

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
              throw new Error('Proposal not present in Proposal collection');
            }
          } else {
            throw new Error('changes is not in applications/ directory');
          }
        } else {
          let dataRes;
          const response2: any = await axios.get(`${element?.contents_url}`);
          dataRes = await parseMetaDataFile(response2?.data);

          // save the purposal data
          const dataToSave: any = {
            id: v4(),
            sha: element?.sha,
            approvals: null,
            team_name: dataRes.team.name,
            status: dataRes.project.status,
            pr_link: pull_request?.html_url,
            file_name: dataRes.project.file_name,
            proposal_name: dataRes.project.project_name,
            extrected_proposal_data: JSON.stringify(dataRes),
            branch_name: pull_request?.head.ref //The source branch (where the changes are coming from)
          };

          await MongoDataHelper.savaData(DATA_MODELS.Proposal, dataToSave);
          dataRes = null;

          return {
            error: false,
            data: 'success'
          };
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

  public mergePullRequest = async (pullRequestNumber: string) => {
    try {
      const headers = {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN_CLASSIC}`
      };
      const apiUrl = `${process.env.GITHUB_API_URL}/pulls/${pullRequestNumber}/merge`;
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
