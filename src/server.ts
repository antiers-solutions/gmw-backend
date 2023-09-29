import * as config from './config';
const isLoaded = config.loadEnvs();

import App from './app';
import { ERROR_MESSAGES } from './constants';
import { log } from './utils/helper.utils';
import redisHelper from './helpers/redis.helper';
import dbConnectionHandler from './mongoDB/connection';
import UserController from './controllers/user.controller';
import TeamsController from './controllers/teams.controller';
import GraphController from './controllers/graph.controller';
import { loadInitialData } from './helpers/dataload.helper';
import ProjectController from './controllers/projects.controller';
import ProposalController from './controllers/proposal.controller';
import MilestoneController from './controllers/milestone.controller';
import GithubHookController from './controllers/githubHook.controller';
import DynamicCardsController from './controllers/dynamicCards.controller';
import MilestoneProposalsController from './controllers/milestone-proposals.controller';
import MilestoneGithubHookController from './controllers/milestone-githubHook.controller';
import axios from 'axios';
import octoConnectionHelper from '././helpers/octoConnection.helper';

// start the service
(async () => {
  try {
    if (isLoaded) {
      const app = new App([
        new UserController(),
        new TeamsController(),
        new GraphController(),
        new ProjectController(),
        new ProposalController(),
        new MilestoneController(),
        new GithubHookController(),
        new DynamicCardsController(),
        new MilestoneProposalsController(),
        new MilestoneGithubHookController()
      ]);

      // connect to the mongodb server
      const isDBconnected = await dbConnectionHandler.createDBConnection();
      if (!isDBconnected) throw new Error(ERROR_MESSAGES.MONGODB_CONNECTION);

      // connect to the redis server
      const isRedisConnected = await redisHelper.connectRedis();
      if (!isRedisConnected) throw new Error(ERROR_MESSAGES.REDIS_CONNECTION);

      // start initial data loading
      await loadInitialData();

      // bind the port and listen for requests
      app.listen();
    } else throw new Error(ERROR_MESSAGES.ENVIROMENT_VARS_LOAD);
  } catch (err) {
    log.red('Error while starting the service: ', err.message);
  }
})();
