import sinon from 'sinon';
import { expect } from 'chai';
import { ProjectsData, TeamsData } from '../mockedData';
import MongoDataHelper from '../../../helpers/mongo.data.helper';
import teamsHelper from '../../../controller-helpers/teams.helper';

export const runTeamsTests = () => {
  describe('Get all Teams Data ', () => {
    it('It should return object data of all teams ', async () => {
      const count = sinon.stub(MongoDataHelper, 'getCount');
      const data = sinon.stub(
        MongoDataHelper,
        'findSelectedDataWithPagination'
      );

      count.resolves(30);
      data.resolves(TeamsData);

      const response = await teamsHelper.getTeamsData(1, 1);

      expect(response?.data?.teamsDataWithProjectStatus).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.teamsDataWithProjectStatus.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('name');
        expect(e).to.have.property('projects');
        expect(e).to.have.property('projectStatus');
      });

      // Restore the original function behavior
      count.restore();
      data.restore();
    });
  });

  describe('Get teams data by id ', () => {
    it('It should return object data of team ', async () => {
      const teamData = sinon.stub(MongoDataHelper, 'findAndQueryData');
      const projectData = sinon.stub(
        MongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      teamData.resolves([TeamsData[0]]);

      projectData.resolves([ProjectsData[1]]);

      const response = await teamsHelper.getTeamsDataByID(
        '4933b995-428b-4882-9f23-92ce69182a02'
      );

      expect(response.error).to.equal(false);
      expect(response.data).to.have.property('teamData');
      expect(response.data).to.have.property('projectsData');
      expect(response.data?.teamData).to.have.property('id');
      expect(response.data?.teamData).to.have.property('name');
      expect(response.data?.teamData).to.have.property('members');
      expect(response.data?.teamData).to.have.property('projects');

      response?.data?.projectsData.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('level');
        expect(e).to.have.property('status');
        expect(e).to.have.property('team_id');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('payment_details');
        expect(e).to.have.property('totalMilestones');
      });

      // Restore the original function behavior
      teamData.restore();
      projectData.restore();
    });

    it('giving wrong teams id, it should return object that contains error and status code', async () => {
      const teamData = sinon.stub(MongoDataHelper, 'findAndQueryData');
      const projectData = sinon.stub(
        MongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      teamData.resolves([]);
      projectData.resolves([]);

      const response = await teamsHelper.getTeamsDataByID('wrong teams id');
      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      teamData.restore();
      projectData.restore();
    });
  });

  describe('Get teams data by name ', () => {
    it('It should return object data of team ', async () => {
      const count = sinon.stub(MongoDataHelper, 'getCount');
      const teamData = sinon.stub(MongoDataHelper, 'findAndQueryData');

      count.resolves(5);
      teamData.resolves([TeamsData[0]]);

      const response = await teamsHelper.getTeamsDataByName('cess lab');
      expect(response.data).to.be.an('object');
      expect(response.data.totalCount).to.be.a('number');

      response?.data?.teamsDataWithProjectStatus?.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('name');
        expect(e).to.have.property('projects');
        expect(e).to.have.property('projectStatus');
      });

      // Restore the original function behavior
      count.restore();
      teamData.restore();
    });

    it('giving wrong teams name, it should return object that contains error and status code', async () => {
      const count = sinon.stub(MongoDataHelper, 'getCount');
      const teamData = sinon.stub(MongoDataHelper, 'findAndQueryData');

      count.resolves(5);
      teamData.resolves([]);
      const response = await teamsHelper.getTeamsDataByName('wrong teams name');
      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      count.restore();
      teamData.restore();
    });
  });

  describe('Modify teams data ', () => {
    // -ve scenario
    it('giving wrong team id, it should return object that contains error and status code', async () => {
      const teamData = sinon.stub(MongoDataHelper, 'findAndQueryData');
      const projectData = sinon.stub(
        MongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      teamData.resolves([]);
      projectData.resolves([]);
      const response = await teamsHelper.modifyTeams('New NAME ', ['id']);
      expect(response.status).to.equal(404);
      expect(response.message).to.equal('Not Found!');

      // Restore the original function behavior
      teamData.restore();
      projectData.restore();
    });
  });
};
