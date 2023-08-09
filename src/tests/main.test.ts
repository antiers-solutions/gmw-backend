import sinon from 'sinon';
import { expect } from 'chai';
import * as config from '../config';
import { makeid } from '../utils/helper.utils';
import teamsHelper from '../controller-helpers/teams.helper';
import redisHelper from '../helpers/redis.helper';
import graphHelper from '../controller-helpers/graph.helper';
import { Project, Pull, Team } from './testConstants';
import projectsHelper from '../controller-helpers/projects.helper';
import milestoneHelper from '../controller-helpers/milestone.helper';
import octoConnectionHelper from '../helpers/octoConnection.helper';
import { mongoDBConnection, disconnectMongo } from '../mongoDB/connection';

import getPullRequestDetails from '../helpers/octokit.helper';

before(async () => {
  config.loadEnvs();
  redisHelper.startRedis();
  await mongoDBConnection();
});

// ********************************Graphs********************************
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
  const stub = sinon.stub(graphHelper, 'getProjectCountByLevel');
  it('It should return data of type array ', async () => {
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
  const stub = sinon.stub(graphHelper, 'getRejectedAndAcceptedProjectsBody');
  it('It should return data of type array ', async () => {
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
    const response = await graphHelper.getRejectedAndAcceptedProjectsBody(2021);

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

// ******************************MileStone***********************
describe('Get MileStone Data ', () => {
  const stub = sinon.stub(milestoneHelper, 'getMilstonesData');

  it('It should return object data which contains milestones of type array ', async () => {
    stub.resolves({
      data: {
        milestones: [
          {
            _id: '64ccf06cbe6ae66a4ec44f7b',
            id: '549a8894-d6a9-408c-8884-252985cbb1d2',
            file_name: 'admeta_milestone_1.md',
            project_id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
            project_md_link: 'https://github.com',
            status: 'complete',
            cost: '12,000 usd',
            merged_at: ''
          }
        ],
        totalCount: 5
      },
      error: false
    });

    const response = await milestoneHelper.getMilstonesData(1);
    expect(response?.data?.milestones).to.be.an('array');
    expect(response?.data?.totalCount).to.be.a('number');
    response?.data?.milestones.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('cost');
      expect(e).to.have.property('status');
      expect(e).to.have.property('file_name');
      expect(e).to.have.property('merged_at');
      expect(e).to.have.property('project_id');
      expect(e).to.have.property('project_md_link');
    });
    // Restore the original function behavior
    stub.restore();
  });

  it('It should return object data which contains all milestones of type array ', async () => {
    stub.resolves({
      data: {
        milestones: [
          {
            _id: '64ccf06cbe6ae66a4ec44f7b',
            id: '549a8894-d6a9-408c-8884-252985cbb1d2',
            file_name: 'admeta_milestone_1.md',
            project_id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
            project_md_link: 'https://github.com',
            status: 'complete',
            cost: '12,000 usd',
            merged_at: ''
          },
          {
            _id: '64ccf06dbe6ae66a4ec44fdc',
            id: '077f7a60-6724-49c0-ac51-c5b3f472e153',
            file_name: 'societal-grant-2-milestone-1.md',
            project_id: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
            project_md_link: 'https://github.com/',
            status: 'complete',
            cost: '20,000 usd',
            merged_at: ''
          },
          {
            _id: '64ccf06dbe6ae66a4ec44fdd',
            id: '0fbea5af-0c98-4d32-9e1c-979912f5c007',
            file_name: 'societal-grant-2-milestone-2.md',
            project_id: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
            project_md_link: 'https://github.com/',
            status: 'complete',
            cost: '10,000 usd',
            merged_at: ''
          },
          {
            _id: '64ccf06dbe6ae66a4ec44fdd',
            id: '0fbea5af-0c98-4d32-9e1c-979912f5c007',
            file_name: 'societal-grant-2-milestone-2.md',
            project_id: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
            project_md_link: 'https://github.com/',
            status: 'complete',
            cost: '10,000 usd',
            merged_at: ''
          },
          {
            _id: '64ccf06dbe6ae66a4ec44fdd',
            id: '0fbea5af-0c98-4d32-9e1c-979912f5c007',
            file_name: 'societal-grant-2-milestone-2.md',
            project_id: 'e2443f25-beff-4d41-8568-3cfaa863f2e3',
            project_md_link: 'https://github.com/',
            status: 'complete',
            cost: '10,000 usd',
            merged_at: ''
          }
        ],
        totalCount: 5
      },
      error: false
    });
    const response = await milestoneHelper.getMilstonesData(0, 0);
    expect(response?.data?.milestones).to.be.an('array');
    expect(response?.data?.totalCount).to.be.a('number');
    response?.data?.milestones.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('cost');
      expect(e).to.have.property('status');
      expect(e).to.have.property('file_name');
      expect(e).to.have.property('merged_at');
      expect(e).to.have.property('project_id');
      expect(e).to.have.property('project_md_link');
    });
    // Restore the original function behavior
    stub.restore();
  });

  it('It should return object data which contains all milestones of type array ', async () => {
    stub.resolves({
      data: {
        milestones: [
          {
            _id: '64ccf06cbe6ae66a4ec44f7b',
            id: '549a8894-d6a9-408c-8884-252985cbb1d2',
            file_name: 'admeta_milestone_1.md',
            project_id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
            project_md_link: 'https://github.com',
            status: 'complete',
            cost: '12,000 usd',
            merged_at: ''
          }
        ],
        totalCount: 5
      },
      error: false
    });
    const response = await milestoneHelper.getMilstonesData(-1, -1);
    expect(response?.data?.milestones).to.be.an('array');
    expect(response?.data?.totalCount).to.be.a('number');
    response?.data?.milestones.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('cost');
      expect(e).to.have.property('status');
      expect(e).to.have.property('file_name');
      expect(e).to.have.property('merged_at');
      expect(e).to.have.property('project_id');
      expect(e).to.have.property('project_md_link');
    });
    // Restore the original function behavior
    stub.restore();
  });
});

describe('Get MileStone Data by projectId ', () => {
  const stub = sinon.stub(milestoneHelper, 'getMilstonesByProjectId');

  it('It should return object data which contains data of type array ', async () => {
    stub.resolves({
      data: [
        {
          _id: '64ccf06cbe6ae66a4ec44f7b',
          id: '549a8894-d6a9-408c-8884-252985cbb1d2',
          file_name: 'admeta_milestone_1.md',
          project_id: 'dd37cd1c-7598-40da-af7b-af924018f6a9',
          project_md_link: 'https://github.com/',
          status: 'complete',
          cost: '12,000 usd',
          merged_at: ''
        }
      ]
    });
    const response = await milestoneHelper.getMilstonesByProjectId(
      '549a8894-d6a9-408c-8884-252985cbb1d2'
    );

    expect(response.data).to.be.an('array');
    response?.data?.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('cost');
      expect(e).to.have.property('status');
      expect(e).to.have.property('file_name');
      expect(e).to.have.property('merged_at');
      expect(e).to.have.property('project_id');
      expect(e).to.have.property('project_md_link');
      // Restore the original function behavior
      stub.restore();
    });
  });

  it('It should return object that contains error and status code ', async () => {
    stub.resolves({
      status: 404,
      message: 'Not Found!'
    });

    const response = await milestoneHelper.getMilstonesByProjectId('frrrrr');
    expect(response).to.be.an('object');
    expect(response.status).to.equal(404);
  });
});

// // ********************************Projects********************************

describe('Get all Projects Data ', () => {
  const stub = sinon.stub(projectsHelper, 'getProjectData');

  it('It should return object data which contains projects of type array ', async () => {
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
  });

  it('It should return object data which contains all projects of type array ', async () => {
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
  const stub = sinon.stub(projectsHelper, 'getProjectDataByID');

  it('It should return object projects of type array ', async () => {
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
  const stub = sinon.stub(projectsHelper, 'getProjectDataByName');

  it('It should return object projects of type array ', async () => {
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

describe('Get filteredProject ', () => {
  const stub = sinon.stub(projectsHelper, 'filterProject');

  it('It should return object projects of type array ', async () => {
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

    const response = await projectsHelper.filterProject(1, 1, '1', 'complete');
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
  const stub = sinon.stub(projectsHelper, 'updateProjectStatus');

  it('It should return data success and error false ', async () => {
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

// ********************************Teams********************************

describe('Get all Teams Data ', () => {
  const stub = sinon.stub(teamsHelper, 'getTeamsData');

  it('It should return object data of all teams ', async () => {
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
  const stub = sinon.stub(teamsHelper, 'getTeamsDataByID');

  it('It should return object data of team ', async () => {
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
    const response = await teamsHelper.getTeamsDataByID(Team.teamIdForGet);

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
  const stub = sinon.stub(teamsHelper, 'getTeamsDataByName');

  it('It should return object data of team ', async () => {
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

    const response = await teamsHelper.getTeamsDataByName(Team.teamNameForGet);
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
    stub.resolves({
      status: 404,
      message: 'Not Found!'
    });
    const response = await teamsHelper.getTeamsDataByID('wrong teams name');
    expect(response).to.be.an('object');
    expect(response.status).to.equal(404);

    // Restore the original function behavior
    stub.restore();
  });
});

describe('Modify teams data ', () => {
  const stub = sinon.stub(teamsHelper, 'modifyTeams');

  // -ve scenario
  it('giving wrong team id, it should return object that contains error and status code', async () => {
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

// ********************************OctoConnectionHelper********************************
describe('Making request for get pulls data to OctoHelper', async () => {
  const stub = sinon.stub(octoConnectionHelper, 'octoRequest');

  it('It should return data ', async () => {
    stub.resolves({
      status: 200,
      data: [
        {
          id: 331413897,
          node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3MzzODk3',
          user: [Object],
          body: '',
          state: 'APPROVED',
          html_url: 'https://github.com/w3f',
          pull_request_url:
            'https://api.github.com/repos/w3f/Grants-Program/pulls/1',
          author_association: 'CONTRIBUTOR',
          _links: [Object],
          submitted_at: '2019-12-12T17:52:44Z',
          commit_id: '945c94f9430ea6a27b6e9a97ac6760bd38960e1'
        },
        {
          id: 331442227,
          node_id: 'MDE3OlB1bGxSZXF1ZXN0UmV2aWV3MzMxNDQyMjI3',
          user: [Object],
          body: 'This is an awesome application!',
          state: 'APPROVED',
          html_url:
            'https://github.com/w3f/Grants-Program/pull/1#pullrequestreview-331442227',
          pull_request_url:
            'https://api.github.com/repos/w3f/Grants-Program/pulls/1',
          author_association: 'COLLABORATOR',
          _links: [Object],
          submitted_at: '2019-12-12T18:41:31Z',
          commit_id: '945c94f9430ea6a27ba6e9a97ac6760bd38960e1'
        }
      ]
    });
    const response = await octoConnectionHelper.octoRequest(
      `GET /repos/w3f/Grants-Program/pulls/${Pull.requestNumber}/reviews`,
      {
        state: 'closed',
        base: 'master',
        direction: 'desc',
        head: `w3f:${''}`
      }
    );

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    response.data.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('user');
      expect(e).to.have.property('body');
      expect(e).to.have.property('state');
      expect(e).to.have.property('node_id');
      expect(e).to.have.property('html_url');
      expect(e).to.have.property('commit_id');
      expect(e).to.have.property('submitted_at');
      expect(e).to.have.property('pull_request_url');
      expect(e).to.have.property('author_association');
    });

    // Restore the original function behavior
    stub.restore();
  });
});

// ********************************UtilHelper********************************
describe('MakeId util helper function ', async () => {
  it('Return unique id', async () => {
    const response = makeid(10);
    expect(response).to.be.a('string');
    expect(response.length).to.equal(10);
  });

  it('-Ve test case giving string length 0 ', async () => {
    const response = makeid(0);
    expect(response).to.be.a('string');
    expect(response.length).to.equal(0);
  });

  it('-Ve test case giving string length -1 ', async () => {
    const response = makeid(-1);
    expect(response).to.be.a('string');
    expect(response.length).to.equal(0);
  });
});

after(async () => {
  redisHelper.stopRedis();
  await disconnectMongo();
  octoConnectionHelper.disconnectOcto();
  // process.exit();
});
