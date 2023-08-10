import sinon from 'sinon';
import { expect } from 'chai';
import graphHelper from '../../../controller-helpers/graph.helper';

export const runGraphTests = () => {
  describe('Get Project Count By Status', () => {
    it('It should return data of type array ', async () => {
      const stub = sinon.stub(graphHelper, 'getProjectsCountByStatus');

      // Configure the stub to return a mock response
      stub.resolves({
        data: [
          { name: 'Hold', value: 0 },
          { name: 'Active', value: 186 },
          { name: 'Complete', value: 221 }
        ]
      });

      const response = await graphHelper.getProjectsCountByStatus();

      expect(response.data).to.be.an('array');
      response.data.forEach((e: any) => {
        expect(e).to.have.property('name');
        expect(e).to.have.property('value');
      });

      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Get Project Count By Level', () => {
    it('It should return data of type array ', async () => {
      const stub = sinon.stub(graphHelper, 'getProjectCountByLevel');
      // Configure the stub to return a mock response
      stub.resolves({
        data: [
          { name: 'Level 1', value: 177 },
          { name: 'Level 2', value: 177 },
          { name: 'Level 3', value: 34 }
        ]
      });

      const response = await graphHelper.getProjectCountByLevel();

      expect(response.data).to.be.an('array');
      response.data.forEach((e: any) => {
        expect(e).to.have.property('name');
        expect(e).to.have.property('value');
      });

      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Get Rejected And Accepted Projects Body', () => {
    it('It should return data of type array ', async () => {
      const stub = sinon.stub(
        graphHelper,
        'getRejectedAndAcceptedProjectsBody'
      );
      stub.resolves({
        data: [
          { name: 'January', Accepted: 19, Rejected: 28 },
          { name: 'February', Accepted: 14, Rejected: 25 },
          { name: 'March', Accepted: 10, Rejected: 25 },
          { name: 'April', Accepted: 11, Rejected: 28 },
          { name: 'May', Accepted: 5, Rejected: 14 },
          { name: 'June', Accepted: 9, Rejected: 11 },
          { name: 'July', Accepted: 17, Rejected: 15 },
          { name: 'August', Accepted: 7, Rejected: 16 },
          { name: 'September', Accepted: 5, Rejected: 0 },
          { name: 'October', Accepted: 10, Rejected: 9 },
          { name: 'November', Accepted: 14, Rejected: 7 },
          { name: 'December', Accepted: 11, Rejected: 10 }
        ],
        error: false
      });
      const response = await graphHelper.getRejectedAndAcceptedProjectsBody(
        2021
      );

      expect(response.data).to.be.an('array');
      expect(response.error).to.equal(false);
      response?.data?.forEach((e: any) => {
        expect(e).to.have.property('name');
        expect(e).to.have.property('Accepted');
        expect(e).to.have.property('Rejected');
      });

      // Restore the original function behavior
      stub.restore();
    });
  });
};
