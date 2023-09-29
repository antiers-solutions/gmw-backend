import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';
import * as octoHelper from '../../../helpers/dataload.helper';
import githubHookHelper from '../../../controller-helpers/githubHook.helper';
import mongoDataHelper from '../../../helpers/mongo.data.helper';
import { PULLREQUEST, axiosResForProposals, parsedData } from '../mockedData';

export const runGitHubHookTests = () => {
  describe('Accept Data from github webhooks and process the data and save into DB', () => {
    let axiosGetStub;

    beforeEach(() => {
      // Create a stub for axios.get
      axiosGetStub = sinon.stub(axios, 'get');
    });

    afterEach(() => {
      // Restore the original axios.get function after each test
      axiosGetStub.restore();
    });

    it('Should return status 200', async () => {
      const saveDataStub = sinon.stub(mongoDataHelper, 'saveData');
      const octoDataStub = sinon.stub(octoHelper, 'parseMetaDataFile');

      axiosGetStub.callsFake((url: string) => {
        console.log(
          'url : ',
          url,
          axiosResForProposals.dataForFiles?.data[0].contents_url
        );

        if (url === axiosResForProposals.dataForFiles?.data[0].contents_url) {
          return Promise.resolve(axiosResForProposals.dataForContentUrl);
        } else {
          return Promise.resolve(axiosResForProposals.dataForFiles);
        }
      });

      saveDataStub.resolves([]);
      octoDataStub.resolves(parsedData);

      //   count.resolves(MILESTONES.length);
      //   findData.resolves(MILESTONES);

      const response = await githubHookHelper.saveGithubData(PULLREQUEST);

      //   expect(response?.data?.milestones).to.be.an('array');
      //   expect(response?.data?.totalCount).to.be.a('number');
      //   response?.data?.milestones.forEach((e: any) => {
      //     expect(e).to.have.property('id');
      //     expect(e).to.have.property('cost');
      //     expect(e).to.have.property('status');
      //     expect(e).to.have.property('file_name');
      //     expect(e).to.have.property('merged_at');
      //     expect(e).to.have.property('project_id');
      //     expect(e).to.have.property('project_md_link');
      //   });
      // Restore the original function behavior
      // count.restore();
      // findData.restore();
    });
  });
};
