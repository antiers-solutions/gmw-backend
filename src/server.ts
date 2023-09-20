import * as config from './config';
const isLoaded = config.loadEnvs();

import App from './app';
import { DATA_MODELS } from './constants';
import { log } from './utils/helper.utils';
import redisHelper from './helpers/redis.helper';
import dbConnectionHandler from './mongoDB/connection';
import mongoDataHelper from './helpers/mongo.data.helper';
import UserController from './controllers/user.controller';
import TeamsController from './controllers/teams.controller';
import GraphController from './controllers/graph.controller';
import loadInitialGrantsData from './helpers/octokit.helper';
import { loadDataFromJsonFile } from './helpers/jsondata.helper';
import ProjectController from './controllers/projects.controller';
import ProposalContoller from './controllers/proposal.controller';
import MilestoneController from './controllers/milestone.controller';
import GithubHookController from './controllers/githubHook.controller';
import DynamicCardsController from './controllers/dynamicCards.controller';
import MilestoneProposalsController from './controllers/milestone-proposals.controller';

// start the service
(async () => {
  try {
    if (isLoaded) {
      const app = new App([
        new UserController(),
        new TeamsController(),
        new GraphController(),
        new ProposalContoller(),
        new ProjectController(),
        new MilestoneController(),
        new GithubHookController(),
        new DynamicCardsController(),
        new MilestoneProposalsController()
      ]);

      // connect to the mongodb server
      const isDBconnected = await dbConnectionHandler.createDBConnection();
      if (!isDBconnected) throw new Error('Unable to connect mongodb');

      // connect to the redis server
      const isRedisConnected = await redisHelper.connectRedis();
      if (!isRedisConnected) throw new Error('Unable to connect redis');

      //check if there is already data loaded inside mongo
      const projectCount = await mongoDataHelper.getCount(DATA_MODELS.Project);
      log.log('Projects Count: ', projectCount);

      if (!projectCount) {
        if (!process.env.NO_FILE) {
          const isDataLoaded = await loadDataFromJsonFile();
          !isDataLoaded && loadInitialGrantsData();
        } else loadInitialGrantsData();
      }

      // bind the port and listen for requests
      app.listen();
    } else throw new Error("Env's not loaded correctly");
  } catch (err) {
    log.red('Error while starting the service: ', err.message);
  }
})();
