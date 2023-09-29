import sinon from 'sinon';
import { expect } from 'chai';
import MilestoneGithubHookHelper from '../../../controller-helpers/milestone-githubHook.helper';
import octoConnectionHelper from '../../../helpers/octoConnection.helper';
import mongoDataHelper from '../../../helpers/mongo.data.helper';
import {
  octokitResponseOpenMilstones,
  openMilestoneFistTimeSavaResponse,
  axiosResponseMilestones,
  findAndQueryClosedMilstone,
  milestonesPullRequetData,
  findAndQueryClosedMilestoneProject,
  saveStubMergedMilestone
} from '../mockedData';
import axios from 'axios';

export const runMilestoneGithubHookHelperTests = () => {
  describe('MilestoneGithubHookHelper', () => {
    describe('saveGithubData', () => {
      afterEach(() => {
        sinon.restore(); // Restore stubs after each test
      });

      beforeEach(() => {
        sinon
          .stub(octoConnectionHelper, 'octoRequest')
          .resolves(octokitResponseOpenMilstones);
      });

      it('should handle a new pull request', async () => {
        // Create a mock requestBody for a new pull request

        // Stub functions from dependencies (mongoDataHelper, octoConnectionHelper, axios) as needed
        sinon.stub(mongoDataHelper, 'findAndQueryData').resolves([]);
        sinon
          .stub(mongoDataHelper, 'saveData')
          .resolves(openMilestoneFistTimeSavaResponse);
        // sinon
        //   .stub(octoConnectionHelper, 'octoRequest')
        //   .resolves(octokitResponseOpenMilstones);
        sinon.stub(axios, 'get').resolves(axiosResponseMilestones);

        const milestonePullData = milestonesPullRequetData({
          state: 'open',
          merged: false,
          assignees: [],
          requested_reviewers: []
        });

        // Call the saveGithubData method
        const response = await MilestoneGithubHookHelper.saveGithubData(
          milestonePullData
        );

        console.log(
          response,
          'This is the test reponse for an open pull request milestone'
        );

        // Assert the response and make necessary expectations
        // expect(response?.error).to.equal(false);
        expect(response?.data).to.deep.equal(null);
        expect(response?.error).to.deep.equal(false);
      });

      it('should handle a closed non-merged pull request', async () => {
        // Create a mock requestBody for a closed non-merged pull request

        // Stub functions from dependencies (mongoDataHelper, octoConnectionHelper, axios) as needed
        sinon.stub(mongoDataHelper, 'findAndQueryData').resolves([
          {
            id: '56d84426-d37d-4f59-a583-97aaf11565a4',
            pr_link:
              'https://api.github.com/repos/shaurya-ATR940/Grants-Delivery-Repo/pulls/13',
            pr_number: 13,
            status: 'open',
            file_name: 'testcases.md',
            user_github_details: [[Object]],
            project_md_link:
              'https://github.com/w3f/Grants-Program/blob/master/applications/tdot.md.',
            application_name: 'tdot.md.',
            md_content_url:
              'https://github.com/shaurya-ATR940/Grants-Delivery-Repo/raw/18bf728b2a8f8b4b2e28d8303b96871e78521ae7/deliveries%2FtestCases.md',
            milestone_level: 0,
            md_link: null,
            updated_at: ' 2023-09-27T07:10:36.000Z',
            reviewers: [],
            repos: [],
            assignee_details: [],
            __v: 0
          }
        ]);
        sinon.stub(mongoDataHelper, 'updateData').resolves({
          acknowledged: true,
          modifiedCount: 1,
          upsertedId: null,
          upsertedCount: 0,
          matchedCount: 1
        });

        const milestonePullData = milestonesPullRequetData({
          state: 'closed',
          merged: false,
          assignees: [],
          requested_reviewers: []
        });

        // Call the saveGithubData method
        const response = await MilestoneGithubHookHelper?.saveGithubData(
          milestonePullData
        );

        console.log(
          response,
          'This is the test reponse for non merged close request milestone'
        );
        expect(response?.data).to.deep.equal(null);
        expect(response?.error).to.deep.equal(false);
        /* expected data */
      });

      it('should handle a closed merged pull request', async () => {
        // Stub functions from dependencies (mongoDataHelper, octoConnectionHelper, axios) as needed
        const milestonePullData = milestonesPullRequetData({
          state: 'close',
          merged: true,
          assignees: [],
          requested_reviewers: [],
          url: 'https://api.github.com/repos/shaurya-ATR940/Grants-Delivery-Repo/pulls/16'
        });

        const findAndQuery = sinon.stub(mongoDataHelper, 'findAndQueryData');

        const updateStub = sinon.stub(mongoDataHelper, 'updateData');

        const saveStub = sinon.stub(mongoDataHelper, 'saveData');

        const deleteStub = sinon.stub(mongoDataHelper, 'deleteData');

        findAndQuery.onCall(0).resolves([findAndQueryClosedMilstone]); // this is used to hadle two functions with same name but different performance
        findAndQuery.onCall(1).resolves([findAndQueryClosedMilestoneProject]);

        updateStub.onCall(0).resolves({
          acknowledged: true,
          modifiedCount: 1,
          upsertedId: null,
          upsertedCount: 0,
          matchedCount: 1
        });

        updateStub.onCall(1).resolves({
          acknowledged: true,
          modifiedCount: 1,
          upsertedId: null,
          upsertedCount: 0,
          matchedCount: 1
        });

        saveStub.resolves(saveStubMergedMilestone);

        deleteStub.resolves({ acknowledged: true, deletedCount: 1 });

        const response = await MilestoneGithubHookHelper.saveGithubData(
          milestonePullData
        );

        console.log(
          response,
          'This is the test reponse for an closed merged pull request milestone'
        );

        // Assert the response and make necessary expectations
        expect(response?.data).to.deep.equal(null);
        expect(response?.error).to.deep.equal(false);
      });

      it('should handle review requested', async () => {
        sinon.stub(mongoDataHelper, 'findAndQueryData').resolves([
          {
            id: '56d84426-d37d-4f59-a583-97aaf11565a4',
            pr_link:
              'https://api.github.com/repos/shaurya-ATR940/Grants-Delivery-Repo/pulls/13',
            pr_number: 13,
            status: 'open',
            file_name: 'testcases.md',
            user_github_details: [[Object]],
            project_md_link:
              'https://github.com/w3f/Grants-Program/blob/master/applications/tdot.md.',
            application_name: 'tdot.md.',
            md_content_url:
              'https://github.com/shaurya-ATR940/Grants-Delivery-Repo/raw/18bf728b2a8f8b4b2e28d8303b96871e78521ae7/deliveries%2FtestCases.md',
            milestone_level: 0,
            md_link: null,
            updated_at: ' 2023-09-27T07:10:36.000Z',
            reviewers: [],
            repos: [],
            assignee_details: [],
            __v: 0
          }
        ]);
        sinon.stub(mongoDataHelper, 'updateData').resolves({
          acknowledged: true,
          modifiedCount: 1,
          upsertedId: null,
          upsertedCount: 0,
          matchedCount: 1
        });

        const { pull_request } = milestonesPullRequetData({
          state: 'open',
          merged: false,
          assignees: [],
          requested_reviewers: []
        });

        // Call the saveGithubData method
        const response = await MilestoneGithubHookHelper.saveGithubData({
          pull_request: pull_request,
          action: 'review_requested'
        });

        console.log(
          response,
          'This is the test reponse for non merged close request milestone'
        );
        expect(response?.data).to.deep.equal(null);
        expect(response?.error).to.deep.equal(false);
      });
    });
  });
};
