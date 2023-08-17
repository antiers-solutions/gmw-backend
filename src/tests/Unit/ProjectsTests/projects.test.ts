import sinon from 'sinon';
import { expect } from 'chai';
import { PROJECTS, ProjectsData } from '../mockedData';
import mongoDataHelper from '../../../helpers/mongo.data.helper';
import projectsHelper from '../../../controller-helpers/projects.helper';

export const runProjectTests = () => {
  describe('Get all Projects Data ', () => {
    it('It should return object data which contains projects of type array ', async () => {
      const countStub = sinon.stub(mongoDataHelper, 'getCount');
      const projectStub = sinon.stub(
        mongoDataHelper,
        'findSelectedDataWithPagination'
      );

      countStub.resolves(4);
      projectStub.resolves(ProjectsData);

      const response = await projectsHelper.getProjectData(1, 2);

      expect(response?.data?.projects).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.projects.forEach((e: unknown) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('project_name');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('totalMilestones');
      });

      // Restore the original function behavior
      countStub.restore();
      projectStub.restore();
    });
  });

  describe('Get Projects Data by id', () => {
    it('It should return object projects of type array ', async () => {
      const stub = sinon.stub(mongoDataHelper, 'findAndQueryData');

      stub.resolves([PROJECTS[0]]);

      const response = await projectsHelper.getProjectDataByID(
        'b7e15891-7d4b-4218-869b-e0da32191a6e'
      );

      expect(response.data).to.be.an('array');
      response?.data?.forEach((e: unknown) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('md_link');
        expect(e).to.have.property('html_url');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('md_content');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('project_name');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('user_github_id');
        expect(e).to.have.property('payment_details');
        expect(e).to.have.property('totalMilestones');
        expect(e).to.have.property('legal_structure');
      });

      // Restore the original function behavior
      stub.restore();
    });

    it('It should return object that contains error and status code ', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'findAndQueryData');

      stub1.resolves([]);

      const response = await projectsHelper.getProjectDataByID(
        'any wrong string'
      );

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub1.restore();
    });
  });

  describe('Get Projects Data by name', () => {
    it('It should return object projects of type array ', async () => {
      const stub = sinon.stub(
        mongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      stub.resolves([ProjectsData[0]]);

      const response = await projectsHelper.getProjectDataByName('admeta');
      expect(response.error).to.equal(false);
      expect(response.data).to.be.an('array');

      response?.data?.forEach((e: unknown) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('html_url');
        expect(e).to.have.property('file_name');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('project_name');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('payment_details');
        expect(e).to.have.property('totalMilestones');
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
      const response = await projectsHelper.getProjectDataByName(
        'any wrong string'
      );

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Get filteredProject ', () => {
    it('It should return object projects of type array ', async () => {
      const countStub = sinon.stub(mongoDataHelper, 'getCount');
      const projectStub = sinon.stub(
        mongoDataHelper,
        'findSelectedDataWithPagination'
      );
      countStub.resolves(4);
      projectStub.resolves([ProjectsData[3]]);

      const response = await projectsHelper.filterProject(
        1,
        1,
        '1',
        'complete'
      );
      expect(response?.data?.filteredData).to.be.an('array');
      expect(response?.data?.count).to.be.a('number');

      response?.data?.filteredData.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('project_name');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('totalMilestones');
      });

      // Restore the original function behavior
      countStub.restore();
      projectStub.restore();
    });

    it('giving wrong parameters, it should return object that contains error and status code', async () => {
      const countStub = sinon.stub(mongoDataHelper, 'getCount');
      const projectStub = sinon.stub(
        mongoDataHelper,
        'findSelectedDataWithPagination'
      );
      countStub.resolves(4);
      projectStub.resolves([]);
      const response = await projectsHelper.filterProject(-1, -1, '0', 'csd');

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      countStub.restore();
      projectStub.restore();
    });
  });

  describe('Update project status ', () => {
    it('It should return data success and error false ', async () => {
      const stub = sinon.stub(mongoDataHelper, 'updateData');

      stub.resolves({
        acknowledged: true,
        matchedCount: 0,
        modifiedCount: 1,
        upsertedCount: 0,
        upsertedId: null
      });

      const response = await projectsHelper.updateProjectStatus(
        'complete',
        'admata'
      );

      expect(response.data).to.equal('success');
      expect(response.error).to.equal(false);

      // Restore the original function behavior
      stub.restore();
    });

    // -ve scenario
    it('giving wrong id, it should return object that contains error and status code', async () => {
      const stub1 = sinon.stub(mongoDataHelper, 'updateData');

      stub1.resolves({
        acknowledged: true,
        matchedCount: 0,
        modifiedCount: 0,
        upsertedCount: 0,
        upsertedId: null
      });

      const response = await projectsHelper.updateProjectStatus(
        'complete',
        'ssdff'
      );

      expect(response.status).to.equal(404);
      expect(response.message).to.equal('Not Found!');

      // Restore the original function behavior
      stub1.restore();
    });
  });
};
