import nock from 'nock';
import mocha from 'mocha';
import App from '../../app';
import express from 'express';
import { expect } from 'chai';
import request from 'supertest';
import * as config from '../../config';
import { connect, disconnect } from '../connection/connection';
import UserController from '../../controllers/user.controller';
import GraphController from '../../controllers/graph.controller';
import TeamsController from '../../controllers/teams.controller';
import ProjectController from '../../controllers/projects.controller';
import MilestoneController from '../../controllers/milestone.controller';
import GithubHookController from '../../controllers/githubHook.controller';

let authToken: string;
let teamIdForGet: string;
let teamNameForGet: string;
let projecIdForGet: string;
let teamIdForUpdate: string;
let projecNameForGet: string;
let app: express.Application;
let projectIdForGetMileStone: string;

before(async () => {
  config.loadEnvs();
  app = new App([
    new UserController(),
    new GraphController(),
    new TeamsController(),
    new ProjectController(),
    new MilestoneController(),
    new GithubHookController()
  ]).app;
  await connect();
});

//**************************** User Sign In **************************

mocha.describe('POST /api/user/signup', () => {
  beforeEach(() => {
    nock('https://github.com').post('/login/oauth/access_token').reply(200, {
      name: 'Shaurya Awasthi',
      gitId: 'shaurya-ATR940',
      image_url: 'https://avatars.githubusercontent.com/u/129488822?v=4'
    });

    nock('https://api.github.com').get('/user').reply(200, {
      id: 2323234433434,
      name: 'Shaurya Awasthi',
      git_id: 'shaurya-ATR940',
      avatar_url: 'https://avatars.githubusercontent.com/u/129488822?v=4',
      login: 'Sura',
      url: 'https://api.github.com/users/shaurya-ATR940',
      site_admin: 'Me'
    });
  });

  it('It should return authToken and user github data', async () => {
    const body = {
      access_token: process.env.GITHUB_ACCESS_TOKEN_CLASSIC
    };
    const headers = {
      'user-agent': 'js-client'
    };
    const response = await request(app)
      .post('/api/user/signup')
      .set(headers)
      .send(body);

    const tokenResponse = response.headers['set-cookie'][0].split(' ');

    const replacements: { [key: string]: string } = {
      'token=': '',
      ';': ''
    };

    const token: string = tokenResponse[0].replace(
      /token=|;/g,
      (match: string | number) => replacements[match]
    );

    authToken = token;
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('object');
    expect(response.body.data).to.have.property('name');
    expect(response.body.data).to.have.property('gitId');
    expect(response.body.data).to.have.property('image_url');
  });
});

//*******************Teams Related Tests******************************

mocha.describe('GET /api/teams/get-all', async () => {
  it('It should return teams data', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app).get('/api/teams/get-all').set(headers);
    teamIdForGet = response.body.data.teamsDataWithProjectStatus[0]?.id;
    teamNameForGet = response.body.data.teamsDataWithProjectStatus[0]?.name;

    expect(response.status).to.equal(200);
    expect(response.body.data.totalCount).to.be.a('number');
    expect(response.body.data.teamsDataWithProjectStatus).to.be.an('array');
    response.body.data.teamsDataWithProjectStatus.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('name');
      expect(e).to.have.property('projects');
      expect(e).to.have.property('projectStatus');
    });
  });
});

mocha.describe('GET /api/teams/get-by-id/:teamId', async () => {
  it('It should return team data by its id ', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/teams/get-by-id/${teamIdForGet}`)
      .set(headers);

    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('object');
    expect(response?.body?.data).to.have.property('teamData');
    expect(response?.body?.data).to.have.property('projectsData');
    expect(response?.body?.data.teamData).to.have.property('id');
    expect(response?.body?.data.teamData).to.have.property('name');
    expect(response?.body?.data.teamData).to.have.property('projects');
    response.body.data.projectsData.forEach((e: unknown) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('level');
      expect(e).to.have.property('status');
      expect(e).to.have.property('team_id');
      expect(e).to.have.property('html_url');
      expect(e).to.have.property('start_date');
      expect(e).to.have.property('total_cost');
      expect(e).to.have.property('milestones');
      expect(e).to.have.property('project_name');
      expect(e).to.have.property('total_duration');
      expect(e).to.have.property('payment_details');
      expect(e).to.have.property('totalMilestones');
    });
  });

  it('Giving wrong team id and it should return message Not Found! ', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/teams/get-by-id/${'Wrong Team Id'}`)
      .set(headers);
    expect(response?.body.message).to.equal('Not Found!');
  });
});

mocha.describe('GET /api/teams/search-by-name', async () => {
  it('It should return teams data by its name', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/teams/search-by-name?searchedName=${teamNameForGet}`)
      .set(headers);

    teamIdForUpdate = response?.body?.data.teamsDataWithProjectStatus[0].id;
    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('object');
    response?.body?.data.teamsDataWithProjectStatus.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('projects');
    });
  });

  it('Giving it wrong name it should return message Not Found !', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/teams/search-by-name?searchedName=${'Wrong Name'}`)
      .set(headers);

    expect(response?.body?.message).to.equal('Not Found!');
  });
});

mocha.describe('PUT /api/teams/merge-team updates', async () => {
  it('It should updates the team name and return updated team id', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const body = {
      updatedName: 'afloat inc.',
      teamIds: [teamIdForUpdate]
    };
    const response = await request(app)
      .put(`/api/teams/merge-team`)
      .set(headers)
      .send(body);

    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('string');
  });

  it('Giving wrong team id and it should return message Not Found!', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const body = {
      updatedName: 'foo bar',
      teamIds: ['wrong team id']
    };
    const response = await request(app)
      .put(`/api/teams/merge-team`)
      .set(headers)
      .send(body);

    expect(response?.body?.message).to.equal('Not Found!');
  });
});

// ************************Project Related Tests******************************

mocha.describe('GET /api/project/get-all', async () => {
  it('It should return all Project data', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/project/get-all?pageLimit=10&pageNo=1`)
      .set(headers);

    expect(response?.status).to.equal(200);
    expect(Number(response?.body?.data?.totalCount)).to.be.an('number');
    expect(response?.body?.data.projects).to.be.an('array');
    projecIdForGet = response?.body?.data.projects[0].id;
    projecNameForGet = response?.body?.data.projects[0].project_name;

    response?.body?.data.projects.forEach((e: unknown) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('level');
      expect(e).to.have.property('status');
      expect(e).to.have.property('team_id');
      expect(e).to.have.property('start_date');
      expect(e).to.have.property('total_cost');
      expect(e).to.have.property('milestones');
      expect(e).to.have.property('project_name');
      expect(e).to.have.property('total_duration');
      expect(e).to.have.property('totalMilestones');
    });
  });
});

mocha.describe('GET /api/project/get-by-id/:projectId', async () => {
  it('It should return Project data by project-id', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };

    const response = await request(app)
      .get(`/api/project/get-by-id/${projecIdForGet}`)
      .set(headers);

    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('array');
    response?.body?.data.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('level');
      expect(e).to.have.property('status');
      expect(e).to.have.property('md_link');
      expect(e).to.have.property('team_id');
      expect(e).to.have.property('file_name');
      expect(e).to.have.property('html_url');
      expect(e).to.have.property('total_cost');
      expect(e).to.have.property('milestones');
      expect(e).to.have.property('md_content');
      expect(e).to.have.property('start_date');
      expect(e).to.have.property('project_name');
      expect(e).to.have.property('total_duration');
      expect(e).to.have.property('user_github_id');
      expect(e).to.have.property('legal_structure');
      expect(e).to.have.property('totalMilestones');
      expect(e).to.have.property('payment_details');
    });
  });
});

mocha.describe('GET /api/project/search-by-name ', async () => {
  it('Ir should return Project data by project-name', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/project/search-by-name?searchedName=${projecNameForGet}`)
      .set(headers);

    // projectIdForUpdate = response?.body?.data[0].id;
    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('array');
    response?.body?.data?.forEach((e: any) => {
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
  });
});

mocha.describe('GET /api/project/filter', async () => {
  it('It should return Project by project-filter (level and status)', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/project/filter?level=1&status=complete`)
      .set(headers);

    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('object');
    response.body?.data?.filteredData.forEach((e: any) => {
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
  });
});

//************************MileStone Related Tests******************************

mocha.describe('GET /api/milestone/get-all', async () => {
  it('It should return milestone data', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get('/api/milestone/get-all')
      .set(headers);
    // projectIdForGetMileStone = response?.body?.data?.milestones[0].id
    expect(response.status).to.equal(200);
    expect(response.body.data.totalCount).to.be.a('number');
    expect(response.body.data.milestones).to.be.an('array');
    response?.body?.data?.milestones.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('cost');
      expect(e).to.have.property('status');
      expect(e).to.have.property('file_name');
      expect(e).to.have.property('merged_at');
      expect(e).to.have.property('project_id');
      expect(e).to.have.property('project_md_link');
    });
  });
});

mocha.describe('GET /api/milestone/get-by-projectId/:projectId', async () => {
  it('It should return Milestone data by project-id', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/milestone/get-by-projectId/${projecIdForGet}`)
      .set(headers);
    expect(response?.status).to.equal(200);
    expect(response?.body?.data[0]).to.be.an('object');
    response?.body?.data?.forEach((e: any) => {
      expect(e).to.have.property('id');
      expect(e).to.have.property('cost');
      expect(e).to.have.property('status');
      expect(e).to.have.property('file_name');
      expect(e).to.have.property('merged_at');
      expect(e).to.have.property('project_id');
      expect(e).to.have.property('project_md_link');
    });
  });
});

//************************Graph Related Tests******************************

mocha.describe('GET /api/graph/get-projects-count-by-status', async () => {
  it('It should return Project Count by its status', async () => {
    const response = await request(app).get(
      '/api/graph/get-projects-count-by-status'
    );
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
    response.body.data.forEach((e: unknown) => {
      expect(e).to.have.property('name');
      expect(e).to.have.property('value');
    });
  });
});

mocha.describe('GET /api/graph/get-projects-count-by-level', async () => {
  it('It should return Project Count by its level', async () => {
    const response = await request(app).get(
      '/api/graph/get-projects-count-by-level'
    );
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
    response.body.data.forEach((e: any) => {
      expect(e).to.have.property('name');
      expect(e).to.have.property('value');
    });
  });
});

mocha.describe('GET /get-rejected-accepted-projects-year', async () => {
  it('It should return Project Count by its level', async () => {
    const response = await request(app).get(
      '/api/graph/get-rejected-accepted-projects-year'
    );
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
    response.body.data.forEach((e: unknown) => {
      expect(e).to.have.property('name');
      expect(e).to.have.property('Accepted');
      expect(e).to.have.property('Rejected');
    });
  });
});

//************************User Log Out***************************

mocha.describe('DELETE /api/user/logout', async () => {
  it('It should logout the user and return data null', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app).delete('/api/user/logout').set(headers);

    expect(response.status).to.equal(200);
    expect(response.body.data).to.equal(null);
  });
});

after(async () => {
  await disconnect();
  // process.exit(1);
});
