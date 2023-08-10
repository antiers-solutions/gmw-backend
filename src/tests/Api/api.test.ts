import App from '../../app';
import mocha from 'mocha';
import express from 'express';
import { expect } from 'chai';
import request from 'supertest';
import * as config from '../../config';
import { connect, disconnect } from '../connection/connection';
import UserController from '../../controllers/user.controller';
import GraphController from '../../controllers/graph.controller';
import TeamsController from '../../controllers/teams.controller';
import { Milestone, Project, Team } from '../Constants/testConstants';
import ProjectController from '../../controllers/projects.controller';
import MilestoneController from '../../controllers/milestone.controller';
import GithubHookController from '../../controllers/githubHook.controller';

let authToken: string;
let teamIdForUpdate: string;
let app: express.Application;
let projectIdForUpdate: string;

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
    authToken = response.body.data.token;
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('object');
  });

  it('Giving wrong access token, It should return data null and message should be user not found!', async () => {
    const body = {
      access_token: 'wrong token'
    };
    const headers = {
      'user-agent': 'js-client'
    };
    const response = await request(app)
      .post('/api/user/signup')
      .set(headers)
      .send(body);
    expect(response.body.message).to.equal('User not found!');
    expect(response.body.data).to.equal(null);
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
    expect(response.status).to.equal(200);
    expect(response.body.data.totalCount).to.be.a('number');
    expect(response.body.data.teamsDataWithProjectStatus).to.be.an('array');
  });
});

mocha.describe('GET /api/teams/get-by-id/:teamId', async () => {
  it('It should return team data by its id ', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/teams/get-by-id/${Team.teamIdForGet}`)
      .set(headers);
    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('object');
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
      .get(`/api/teams/search-by-name?searchedName=${Team.teamNameForGet}`)
      .set(headers);
    teamIdForUpdate = response?.body?.data.teamsDataWithProjectStatus[0].id;
    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('object');
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
  });
});

mocha.describe('GET /api/project/get-by-id/:projectId', async () => {
  it('It should return Project data by project-id', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/project/get-by-id/${Project.idForGet}`)
      .set(headers);
    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('array');
  });
});

mocha.describe('GET /api/project/search-by-name ', async () => {
  it('Ir should return Project data by project-name', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(`/api/project/search-by-name?searchedName=${Project.nameForSearch}`)
      .set(headers);
    projectIdForUpdate = response?.body?.data[0].id;
    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('array');
  });
});

mocha.describe('GET /api/project/filter', async () => {
  it('It should return Project by project-filter (level and status)', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(
        `/api/project/filter?level=${Project.level}&status=${Project.status}`
      )
      .set(headers);
    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('object');
  });
});

mocha.describe('PUT /api/project/update-status', async () => {
  it('It should updates the Project status and return updated team id', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const body = {
      updatedStatus: Project.statusYouWantToUpdate,
      id: projectIdForUpdate
    };
    const response = await request(app)
      .put('/api/project/update-status')
      .set(headers)
      .send(body);
    expect(response?.status).to.equal(200);
    expect(response?.body?.data).to.be.an('array');
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
    expect(response.status).to.equal(200);
    expect(response.body.data.totalCount).to.be.a('number');
    expect(response.body.data.milestones).to.be.an('array');
  });
});

mocha.describe('GET /api/milestone/get-by-projectId/:projectId', async () => {
  it('It should return Milestone data by project-id', async () => {
    const headers = {
      'user-agent': 'js-client',
      Cookie: `token=${authToken}`
    };
    const response = await request(app)
      .get(
        `/api/milestone/get-by-projectId/${Milestone.projectIdForGetMileSton}`
      )
      .set(headers);
    expect(response?.status).to.equal(200);
    expect(response?.body?.data[0]).to.be.an('object');
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
  });
});

mocha.describe('', async () => {
  it('GET /api/graph/get-projects-count-by-level should return Project Count by its level', async () => {
    const response = await request(app).get(
      '/api/graph/get-projects-count-by-level'
    );
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
  });
});

mocha.describe('', async () => {
  it('GET /api/graph/get-milestones-count-per-project should return Milestone Count by Project', async () => {
    const response = await request(app).get(
      '/api/graph/get-milestones-count-per-project'
    );
    expect(response.status).to.equal(200);
    expect(response.body.data).to.be.an('array');
  });
});

//************************User Log Out***************************

mocha.describe('', async () => {
  it('DELETE /api/user/logout should logout the user and return data null', async () => {
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
  // redisHelper.stopRedis();
  // await disconnectMongo();
  await disconnect();
  process.exit(1);
});
