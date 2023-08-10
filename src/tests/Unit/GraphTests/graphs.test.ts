import sinon from 'sinon';
import { expect } from 'chai';
import graphHelper from '../../../controller-helpers/graph.helper';
import mongoDataHelper from '../../../helpers/mongo.data.helper';
import { PROJECTS } from '../mockedData';

export const runGraphTests = () => {
  describe('Get Project Count By Status', () => {
    it('It should return data of type array ', async () => {
      const stub = sinon.stub(mongoDataHelper, 'findAndQueryData');

      // Configure the stub to return a mock response
      stub.resolves(PROJECTS);

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
      const stub = sinon.stub(mongoDataHelper, 'findAndQueryData'); // Configure the stub to return a mock response
      stub.resolves(PROJECTS);

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
      const stub = sinon.stub(mongoDataHelper, 'findAndQueryData');
      stub.resolves(PROJECTS);
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
