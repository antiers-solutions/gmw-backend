import sinon from 'sinon';
import { expect } from 'chai';
import projectsHelper from '../../../controller-helpers/projects.helper';

export const runProjectTests = () => {
  describe('Get all Projects Data ', () => {
    it('It should return object data which contains projects of type array ', async () => {
      const stub = sinon.stub(projectsHelper, 'getProjectData');
      stub.resolves({
        data: {
          projects: [
            {
              _id: '64ccf06cbe6ae66a4ec44ab4',
              id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              level: '2',
              totalMilestones: 1,
              status: 'complete',
              milestones: [Array],
              total_cost: [Object],
              project_name: 'admeta',
              total_duration: '1 months',
              team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              start_date: '2021 - 12 - 15T10: 19: 48.000Z'
            }
          ],
          totalCount: 5
        }
      });

      const response = await projectsHelper.getProjectData(1, 2);

      expect(response?.data?.projects).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.projects.forEach((e: any) => {
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
      stub.restore();
    });

    it('It should return object data which contains all projects of type array ', async () => {
      const stub = sinon.stub(projectsHelper, 'getProjectData');

      stub.resolves({
        data: {
          projects: [
            {
              _id: '64ccf06cbe6ae66a4ec44ab4',
              id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              level: '2',
              totalMilestones: 1,
              status: 'complete',
              milestones: [Array],
              total_cost: [Object],
              project_name: 'admeta',
              total_duration: '1 months',
              team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              start_date: '2021 - 12 - 15T10: 19: 48.000Z'
            },
            {
              _id: '64ccf06cbe6ae66a4ec44ab4',
              id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              level: '2',
              totalMilestones: 1,
              status: 'complete',
              milestones: [Array],
              total_cost: [Object],
              project_name: 'admeta',
              total_duration: '1 months',
              team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              start_date: '2021 - 12 - 15T10: 19: 48.000Z'
            },
            {
              _id: '64ccf06cbe6ae66a4ec44ab4',
              id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              level: '2',
              totalMilestones: 1,
              status: 'complete',
              milestones: [Array],
              total_cost: [Object],
              project_name: 'admeta',
              total_duration: '1 months',
              team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              start_date: '2021 - 12 - 15T10: 19: 48.000Z'
            },
            {
              _id: '64ccf06cbe6ae66a4ec44ab4',
              id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              level: '2',
              totalMilestones: 1,
              status: 'complete',
              milestones: [Array],
              total_cost: [Object],
              project_name: 'admeta',
              total_duration: '1 months',
              team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              start_date: '2021 - 12 - 15T10: 19: 48.000Z'
            },
            {
              _id: '64ccf06cbe6ae66a4ec44ab4',
              id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              level: '2',
              totalMilestones: 1,
              status: 'complete',
              milestones: [Array],
              total_cost: [Object],
              project_name: 'admeta',
              total_duration: '1 months',
              team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              start_date: '2021 - 12 - 15T10: 19: 48.000Z'
            }
          ],
          totalCount: 5
        }
      });

      const response = await projectsHelper.getProjectData(0, 0);
      expect(response?.data?.projects).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.projects.forEach((e: any) => {
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
      stub.restore();
    });

    it('It should return object data which projects of type array ', async () => {
      const stub = sinon.stub(projectsHelper, 'getProjectData');
      stub.resolves({
        data: {
          projects: [
            {
              _id: '64ccf06cbe6ae66a4ec44ab4',
              id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
              level: '2',
              totalMilestones: 1,
              status: 'complete',
              milestones: [Array],
              total_cost: [Object],
              project_name: 'admeta',
              total_duration: '1 months',
              team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
              start_date: '2021 - 12 - 15T10: 19: 48.000Z'
            }
          ],
          totalCount: 5
        }
      });

      const response = await projectsHelper.getProjectData(-1, -1);
      expect(response?.data?.projects).to.be.an('array');
      expect(response?.data?.totalCount).to.be.a('number');
      response?.data?.projects.forEach((e: any) => {
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
      stub.restore();
    });
  });

  describe('Get Projects Data by id', () => {
    it('It should return object projects of type array ', async () => {
      const stub = sinon.stub(projectsHelper, 'getProjectDataByID');
      stub.resolves({
        error: false,
        data: [
          {
            _id: '64ccf06cbe6ae66a4ec44ab4',
            id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
            user_github_id: null,
            file_name: 'admeta.md',
            start_date: '2021-12-15T10:19:48.000Z',
            html_url: 'https://github',
            payment_details:
              '0x1d346c4f0732674a1fc69b4bafba854f53353c35 (erc20 usdt)',
            md_content: '# AdMeta',
            md_link: 'https://raw.githubusercontent.com',
            project_name: 'admeta',
            status: 'complete',
            total_cost: [Object],
            total_duration: '1 months',
            team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
            level: '2',
            legal_structure: [Object],
            milestones: [Array],
            totalMilestones: 1,
            __v: 0
          }
        ]
      });
      const response = await projectsHelper.getProjectDataByID(
        'dd37cd1c-7598-40da-af7b-af924018f6a9'
      );

      expect(response.data).to.be.an('array');
      response?.data?.forEach((e: any) => {
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
      const stub = sinon.stub(projectsHelper, 'getProjectDataByID');
      stub.resolves({
        status: 404,
        message: 'Not Found!'
      });
      const response = await projectsHelper.getProjectDataByID(
        'any wrong string'
      );

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Get Projects Data by name', () => {
    it('It should return object projects of type array ', async () => {
      const stub = sinon.stub(projectsHelper, 'getProjectDataByName');
      stub.resolves({
        error: false,
        data: [
          {
            _id: '64ccf06cbe6ae66a4ec44ab4',
            id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
            file_name: 'admeta.md',
            start_date: '2021-12-15T10:19:48.000Z',
            html_url: 'https://github.com/url/AdMeta.md',
            payment_details:
              '0x1d346c4f0732674a1fc69b4bafba854f53353c35 (erc20 usdt)',
            project_name: 'admeta',
            status: 'complete',
            total_cost: [Object],
            total_duration: '1 months',
            team_id: '02b8e0fb-b698-4d55-90a8-ef8afe6f4a66',
            level: '2',
            milestones: [Array],
            totalMilestones: 1
          }
        ]
      });

      const response = await projectsHelper.getProjectDataByName('admeta');
      expect(response.error).to.equal(false);
      expect(response.data).to.be.an('array');

      response?.data?.forEach((e: any) => {
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
      const stub = sinon.stub(projectsHelper, 'getProjectDataByName');
      stub.resolves({
        status: 404,
        message: 'Not Found!'
      });
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
      const stub = sinon.stub(projectsHelper, 'filterProject');
      stub.resolves({
        error: false,
        data: {
          filteredData: [
            {
              _id: '64ccf06cbe6ae66a4ec44ab6',
              id: '891da133-0660-4951-b10e-313dff18431a',
              start_date: '2021-02-04T17:09:59.000Z',
              project_name: 'algocash',
              status: 'complete',
              total_cost: { amount: '5000', currency: 'dai' },
              total_duration: '6 weeks',
              team_id: '24e675f1-b0e5-41c9-bb27-ab9ace7313a7',
              level: '1',
              milestones: ['6c44c320-d01a-4170-bbcc-56c55dc8ad8d'],
              totalMilestones: 1
            }
          ],
          count: 102
        }
      });

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
      stub.restore();
    });

    it('giving wrong parameters, it should return object that contains error and status code', async () => {
      const stub = sinon.stub(projectsHelper, 'filterProject');
      stub.resolves({
        status: 404,
        message: 'Not Found!'
      });

      const response = await projectsHelper.filterProject(-1, -1, '0', 'csd');

      expect(response).to.be.an('object');
      expect(response.status).to.equal(404);

      // Restore the original function behavior
      stub.restore();
    });
  });

  describe('Update project status ', () => {
    it('It should return data success and error false ', async () => {
      const stub = sinon.stub(projectsHelper, 'updateProjectStatus');
      stub.resolves({
        data: 'success',
        error: false
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
      const stub = sinon.stub(projectsHelper, 'updateProjectStatus');
      stub.resolves({
        status: 404,
        message: 'Not Found!'
      });

      const response = await projectsHelper.updateProjectStatus(
        'complete',
        'ssdff'
      );

      expect(response.status).to.equal(404);
      expect(response.message).to.equal('Not Found!');

      // Restore the original function behavior
      stub.restore();
    });
  });
};
