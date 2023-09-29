import axios from 'axios';
import sinon from 'sinon';
import * as octoHelper from '../../../helpers/dataload.helper';
import mongoDataHelper from '../../../helpers/mongo.data.helper';
import {
  PULLREQUEST,
  axiosResForProposals,
  parsedData,
  dbResponse,
  pullrequestOtherData
} from '../mockedData';
import githubHookHelper from '../../../controller-helpers/githubHook.helper';
import { expect } from 'chai';

export const runGitHubHookTests = () => {
  describe('Accept Data from github webhooks and process the data and save into DB', () => {
    it('Saving Open pull request data It should return status 200', async () => {
      // Create a stub for axios.get
      const axiosGetStub = sinon.stub(axios, 'get');
      const saveDataStub = sinon.stub(mongoDataHelper, 'saveData');
      const octoDataStub = sinon.stub(octoHelper, 'parseMetaDataFile');

      axiosGetStub.resolves(axiosResForProposals.dataForFiles);

      saveDataStub.resolves([]);

      octoDataStub.resolves(parsedData);

      const response = await githubHookHelper.saveGithubData(PULLREQUEST);
      expect(response).to.have.property('error');
      expect(response?.error).to.be.equal(false);

      // Restore the original function behavior
      axiosGetStub.restore();
      saveDataStub.restore();
      octoDataStub.restore();
    });

    it('Saving pull request data It should return status 200', async () => {
      // Create a stub for axios.get
      const axiosGetStub = sinon.stub(axios, 'get');
      const updateDataStub = sinon.stub(mongoDataHelper, 'updateData');

      axiosGetStub.resolves(axiosResForProposals.dataForFiles);

      updateDataStub.resolves(dbResponse.updateRes);

      const pullData = PULLREQUEST;
      pullData.action = 'closed';
      pullData.pull_request.merged = false;

      const response = await githubHookHelper.saveGithubData(pullData);

      expect(response).to.have.property('error');
      expect(response?.error).to.be.equal(false);

      // Restore the original function behavior
      axiosGetStub.restore();
      updateDataStub.restore();
    });

    it('Saving Merged request data It should return status 200', async () => {
      // Stubs
      const axiosGetStub = sinon.stub(axios, 'get');
      const findAndQueryDataStub = sinon.stub(
        mongoDataHelper,
        'findAndQueryData'
      );
      const saveDataStub = sinon.stub(mongoDataHelper, 'saveData');
      const updateDataStub = sinon.stub(mongoDataHelper, 'updateData');

      //resolving predefined data for stubs
      axiosGetStub.resolves(axiosResForProposals.dataForFiles);
      findAndQueryDataStub.resolves(dbResponse.proposalRes);
      saveDataStub.onCall(0).resolves(dbResponse.saveProjectRes);
      saveDataStub.onCall(1).resolves(dbResponse.saveTeamsRes);
      updateDataStub.resolves(dbResponse.updateRes);

      const pullData = PULLREQUEST;
      pullData.action = 'closed';
      pullData.pull_request.merged = true;
      const response = await githubHookHelper.saveGithubData(pullData);

      expect(response).to.have.property('error');
      expect(response?.error).to.be.equal(false);

      // Restore the original function behavior
      axiosGetStub.restore();
      saveDataStub.resolves();
      updateDataStub.restore();
      findAndQueryDataStub.resolves();
    });

    it('Saving Reviewers data It should return status 200', async () => {
      // Stubs
      const axiosGetStub = sinon.stub(axios, 'get');
      const updateDataStub = sinon.stub(mongoDataHelper, 'updateData');

      //resolving predefined data for stubs
      axiosGetStub.resolves(axiosResForProposals.dataForFiles);
      updateDataStub.resolves(dbResponse.updateRes);

      const pullData = PULLREQUEST;
      pullData.action = 'review_requested';
      pullData.pull_request.requested_reviewers = [
        {
          login: 'Shweta2217',
          id: 86247988,
          node_id: 'MDQ6VXNlcjg2MjQ3OTg4',
          avatar_url: 'https://avatars.githubusercontent.com/u/86247988?v=4'
        }
      ];

      const response = await githubHookHelper.saveGithubData(pullData);

      expect(response).to.have.property('error');
      expect(response?.error).to.be.equal(false);

      // Restore the original function behavior
      axiosGetStub.restore();
      updateDataStub.restore();
    });

    it('Saving Reviewers data It should return status 200', async () => {
      // Stubs
      const axiosGetStub = sinon.stub(axios, 'get');
      const updateDataStub = sinon.stub(mongoDataHelper, 'updateData');

      //resolving predefined data for stubs
      axiosGetStub.resolves(axiosResForProposals.dataForFiles);
      updateDataStub.resolves(dbResponse.updateRes);

      const pullData = PULLREQUEST;
      pullData.action = 'assigned';
      pullData.pull_request.assignees = [
        {
          login: 'Shweta2217',
          id: 86247988,
          avatar_url: 'https://avatars.githubusercontent.com/u/86247988?v=4'
        }
      ];

      const response = await githubHookHelper.saveGithubData(pullData);

      expect(response).to.have.property('error');
      expect(response?.error).to.be.equal(false);

      // Restore the original function behavior
      axiosGetStub.restore();
      updateDataStub.restore();
    });

    it('Saving changed or edited data It should return status 200', async () => {
      // Create a stub for axios.get
      const axiosGetStub = sinon.stub(axios, 'get');
      const updateDataStub = sinon.stub(mongoDataHelper, 'updateData');
      const octoDataStub = sinon.stub(octoHelper, 'parseMetaDataFile');

      axiosGetStub.resolves(axiosResForProposals.dataForFiles);

      updateDataStub.resolves(dbResponse.updateRes);

      octoDataStub.resolves(parsedData);
      const pullData = PULLREQUEST;
      pullData.action = 'synchronize';

      const response = await githubHookHelper.saveGithubData(pullData);
      expect(response).to.have.property('error');
      expect(response?.error).to.be.equal(false);

      // Restore the original function behavior
      axiosGetStub.restore();
      octoDataStub.restore();
      updateDataStub.restore();
    });

    it('Reopening pull request and saving data It should return status 200', async () => {
      // Create a stub for axios.get
      const axiosGetStub = sinon.stub(axios, 'get');
      const updateDataStub = sinon.stub(mongoDataHelper, 'updateData');

      axiosGetStub.resolves(axiosResForProposals.dataForFiles);

      updateDataStub.resolves();

      const pullData = PULLREQUEST;
      pullData.action = 'reopened';

      const response = await githubHookHelper.saveGithubData(pullData);
      expect(response).to.have.property('error');
      expect(response?.error).to.be.equal(false);

      // Restore the original function behavior
      axiosGetStub.restore();
      updateDataStub.restore();
    });
  });

  //todo
  // describe('Merge Pull Request(Poposal) ', () => {
  // });
};
