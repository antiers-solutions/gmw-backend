import sinon from 'sinon';
import { expect } from 'chai';
import { ProjectsData, TeamsData } from '../../mockedData';
import MongoDataHelper from '../../../helpers/mongo.data.helper';
import teamsHelper from '../../../controller-helpers/teams.helper';

export const runTeamsTests = () => {
  describe('Get all Teams Data ', () => {
    it('It should return object data of all teams ', async () => {
      const stub1 = sinon.stub(MongoDataHelper, 'getCount');
      const stub2 = sinon.stub(
        MongoDataHelper,
        'findSelectedDataWithPagination'
      );

      stub1.resolves(30);
      stub2.resolves(TeamsData);

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
      stub1.restore();
      stub2.restore();
    });
  });

  describe('Get teams data by id ', () => {
    it('It should return object data of team ', async () => {
      const stub1 = sinon.stub(MongoDataHelper, 'findAndQueryData');
      const stub2 = sinon.stub(
        MongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      stub1.resolves([TeamsData[0]]);

      stub2.resolves([ProjectsData[1]]);

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
        expect(e).to.have.property('html_url');
        expect(e).to.have.property('start_date');
        expect(e).to.have.property('total_cost');
        expect(e).to.have.property('milestones');
        expect(e).to.have.property('total_duration');
        expect(e).to.have.property('payment_details');
        expect(e).to.have.property('totalMilestones');
      });

      // Restore the original function behavior
      stub1.restore();
      stub2.restore();
    });

    it('giving wrong teams id, it should return object that contains error and status code', async () => {
      const stub1 = sinon.stub(MongoDataHelper, 'findAndQueryData');
      const stub2 = sinon.stub(
        MongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      stub1.resolves([]);
      stub2.resolves([]);

      const response = await teamsHelper.getTeamsDataByID('wrong teams id');
      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub1.restore();
      stub2.restore();
    });
  });

  describe('Get teams data by name ', () => {
    it('It should return object data of team ', async () => {
      const stub1 = sinon.stub(MongoDataHelper, 'getCount');
      const stub2 = sinon.stub(MongoDataHelper, 'findAndQueryData');

      stub1.resolves(5);
      stub2.resolves([TeamsData[0]]);

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
      stub1.restore();
      stub2.restore();
    });

    it('giving wrong teams name, it should return object that contains error and status code', async () => {
      const stub1 = sinon.stub(MongoDataHelper, 'getCount');
      const stub2 = sinon.stub(MongoDataHelper, 'findAndQueryData');

      stub1.resolves(5);
      stub2.resolves([]);
      const response = await teamsHelper.getTeamsDataByName('wrong teams name');
      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub1.restore();
      stub2.restore();
    });
  });

  describe('Modify teams data ', () => {
    // -ve scenario
    it('giving wrong team id, it should return object that contains error and status code', async () => {
      const stub1 = sinon.stub(MongoDataHelper, 'findAndQueryData');
      const stub2 = sinon.stub(
        MongoDataHelper,
        'findAndQueryDataWithSelectedColumns'
      );

      stub1.resolves([]);
      stub2.resolves([]);
      const response = await teamsHelper.modifyTeams('New NAME ', ['id']);
      expect(response.status).to.equal(404);
      expect(response.message).to.equal('Not Found!');

      // Restore the original function behavior
      stub1.restore();
      stub2.restore();
    });
  });
};
