import sinon from 'sinon';
import { expect } from 'chai';
import { PROPOSALS } from '../mockedData';
import mongoDataHelper from '../../../helpers/mongo.data.helper';
import proposalHelper from '../../../controller-helpers/proposal.helper';

export const runProposalsTests = () => {
  describe('Get all Proposals Data ', () => {
    it('It should return object data which contains proposals of type array ', async () => {
      const countStub = sinon.stub(mongoDataHelper, 'getCount');
      const proposalStub = sinon.stub(
        mongoDataHelper,
        'findAndQueryDataWithPagination'
      );

      countStub.resolves(4);
      proposalStub.resolves(PROPOSALS);

      const response = await proposalHelper.getAllProposalData(1, 3);

      expect(response?.error).to.be.equal(false);
      expect(response?.data?.proposals).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.proposals?.forEach((e: unknown) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('repos');
        expect(e).to.have.property('status');
        expect(e).to.have.property('pr_link');
        expect(e).to.have.property('md_link');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('reviewers');
        expect(e).to.have.property('team_name');
        expect(e).to.have.property('created_at');
        expect(e).to.have.property('updated_at');
        expect(e).to.have.property('proposal_name');
        expect(e).to.have.property('user_github_details');
        expect(e).to.have.property('extrected_proposal_data');
      });

      // Restore the original function behavior
      countStub.restore();
      proposalStub.restore();
    });
  });

  describe('Get Proposals Data by id', () => {
    it('It should return object proposals of type array ', async () => {
      const stub = sinon.stub(mongoDataHelper, 'findAndQueryData');

      stub.resolves([PROPOSALS[0]]);

      const response = await proposalHelper.getProposalDataById(
        '4fcca352-e435-4d48-824c-e6fa73c1bc49'
      );

      expect(response.data).to.be.an('array');
      response?.data?.proposals?.forEach((e: unknown) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('repos');
        expect(e).to.have.property('status');
        expect(e).to.have.property('pr_link');
        expect(e).to.have.property('md_link');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('reviewers');
        expect(e).to.have.property('team_name');
        expect(e).to.have.property('created_at');
        expect(e).to.have.property('updated_at');
        expect(e).to.have.property('proposal_name');
        expect(e).to.have.property('user_github_details');
        expect(e).to.have.property('extrected_proposal_data');
      });

      // Restore the original function behavior
      stub.restore();
    });

    it('It should return object that contains error and status code ', async () => {
      const stub = sinon.stub(mongoDataHelper, 'findAndQueryData');

      stub.resolves([]);

      const response = await proposalHelper.getProposalDataById(
        'any wrong string'
      );

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Get Proposals Data by name', () => {
    it('It should return object Proposals of type array ', async () => {
      const stub = sinon.stub(
        mongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      stub.resolves([PROPOSALS[0]]);

      const response = await proposalHelper.getProposalDataByName('artzero');

      expect(response.error).to.equal(false);
      expect(response.data).to.be.an('array');

      response?.data?.forEach((e: unknown) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('repos');
        expect(e).to.have.property('status');
        expect(e).to.have.property('pr_link');
        expect(e).to.have.property('md_link');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('reviewers');
        expect(e).to.have.property('team_name');
        expect(e).to.have.property('created_at');
        expect(e).to.have.property('updated_at');
        expect(e).to.have.property('proposal_name');
        expect(e).to.have.property('user_github_details');
        expect(e).to.have.property('extrected_proposal_data');
      });

      // Restore the original function behavior
      stub.restore();
    });

    it('It should return object that contains error and status code ', async () => {
      const stub = sinon.stub(
        mongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );
      stub.resolves([]);
      const response = await proposalHelper.getProposalDataByName(
        'any wrong string'
      );

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });
};
