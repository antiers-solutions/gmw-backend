import sinon from 'sinon';
import { expect } from 'chai';
import teamsHelper from '../../../controller-helpers/teams.helper';

export const runTeamsTests = () => {
  describe('Get all Teams Data ', () => {
    it('It should return object data of all teams ', async () => {
      const stub = sinon.stub(teamsHelper, 'getTeamsData');
      stub.resolves({
        data: {
          teamsDataWithProjectStatus: [
            {
              id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              projects: [[Object]],
              name: 'admeta',
              projectStatus: { active: 0, complete: 1, hold: 0 }
            }
          ],
          totalCount: 5
        },
        error: false
      });

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
      stub.restore();
    });
  });

  describe('Get teams data by id ', () => {
    it('It should return object data of team ', async () => {
      const stub = sinon.stub(teamsHelper, 'getTeamsDataByID');
      stub.resolves({
        data: {
          teamData: {
            _id: '64ccf06cbe6ae66a4ec44c4c',
            id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
            name: 'admeta',
            members: [
              'Han Zhao - Core Dev and PM of Litentry Parachain Team. University of Stuttgart',
              "Yvonne Xie - Digital Marketing Lead. King's College London",
              'Shihao Zhao - Full Stack Dev of Litentry. University of Toronto',
              'Hao Ding - VP of Litentry, Founder of Web3Go. University of Stuttgart',
              'Dr. John Wu - Core Dev of Litentry Parachain Team. The University of Tokyo'
            ],
            projects: [
              {
                projectId: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
                status: 'complete',
                _id: '64ccf06cbe6ae66a4ec44c4d'
              }
            ],
            __v: 0
          },
          projectsData: [
            {
              _id: '64ccf06cbe6ae66a4ec44ab4',
              id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              start_date: '2021-12-15T10:19:48.000Z',
              html_url: 'https://github.com',
              payment_details:
                '0x1d346c4f0732674a1fc69b4bafba854f53353c35 (erc20 usdt)',
              project_name: 'admeta',
              status: 'complete',
              total_cost: { amount: '12000', currency: 'usd' },
              total_duration: '1 months',
              team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              level: '2',
              milestones: ['549a8894-d6a9-408c-8884-252985cbb1d2'],
              totalMilestones: 1
            }
          ]
        },
        error: false
      });

      const response = await teamsHelper.getTeamsDataByID(
        '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66'
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
      stub.restore();
    });

    it('giving wrong teams id, it should return object that contains error and status code', async () => {
      const stub = sinon.stub(teamsHelper, 'getTeamsDataByID');

      stub.resolves({
        status: 404,
        message: 'Not Found!'
      });

      const response = await teamsHelper.getTeamsDataByID('wrong teams id');
      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Get teams data by name ', () => {
    it('It should return object data of team ', async () => {
      const stub = sinon.stub(teamsHelper, 'getTeamsDataByName');
      stub.resolves({
        data: {
          totalCount: 407,
          teamsDataWithProjectStatus: [
            {
              id: '2186e7b5-f3de-4ff9-962a-8e327c544b4e',
              projects: [],
              name: 'afloat inc.',
              projectStatus: { active: 0, complete: 1, hold: 0 }
            }
          ]
        },
        error: false
      });

      const response = await teamsHelper.getTeamsDataByName('afloat inc.');
      expect(response.data).to.be.an('object');
      expect(response.data.totalCount).to.be.a('number');

      response?.data?.teamsDataWithProjectStatus?.forEach((e: any) => {
        expect(e).to.have.property('id');
        expect(e).to.have.property('name');
        expect(e).to.have.property('projects');
        expect(e).to.have.property('projectStatus');
      });

      // Restore the original function behavior
      stub.restore();
    });

    it('giving wrong teams name, it should return object that contains error and status code', async () => {
      const stub = sinon.stub(teamsHelper, 'getTeamsDataByName');
      stub.resolves({
        status: 404,
        message: 'Not Found!'
      });
      const response = await teamsHelper.getTeamsDataByName('wrong teams name');
      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Modify teams data ', () => {
    // -ve scenario
    it('giving wrong team id, it should return object that contains error and status code', async () => {
      const stub = sinon.stub(teamsHelper, 'modifyTeams');
      stub.resolves({
        status: 404,
        message: 'Not Found!'
      });
      const response = await teamsHelper.modifyTeams('New NAME ', ['id']);
      expect(response.status).to.equal(404);
      expect(response.message).to.equal('Not Found!');

      // Restore the original function behavior
      stub.restore();
    });
  });
};
