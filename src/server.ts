import * as config from './config';
const isLoaded = config.loadEnvs();

import App from './app';
import { DATA_MODELS } from './constants';
import UserController from './controllers/user.controller';
import TeamsController from './controllers/teams.controller';
import ProjectController from './controllers/projects.controller';
import MilestoneController from './controllers/milestone.controller';
import GithubHookController from './controllers/githubHook.controller';
import GraphController from './controllers/graph.controller';
import dbConnectionHandler from './mongoDB/connection';
import mongoDataHelper from './helpers/mongo.data.helper';
import loadInitialGrantsData, {
  getMilestoneOpenPullRequests
} from './helpers/octokit.helper';
import redisHelper from './helpers/redis.helper';
import DynamicCardsController from './controllers/dynamicCards.controller';
import { log } from './utils/helper.utils';
import { loadDataFromJsonFile } from './helpers/jsondata.helper';
import MilestoneProposalsController from './controllers/milestone-proposals.controller';

// start the service
(async () => {
  try {
    if (isLoaded) {
      const app = new App([
        new UserController(),
        new TeamsController(),
        new GraphController(),
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
        const isDataLoaded = await loadDataFromJsonFile();
        !isDataLoaded && loadInitialGrantsData();
      }

      // loadInitialGrantsData();

      // to be removed

      // loadInitialGrantsData();
      // getMilestoneOpenPullRequests();

      // bind the port and listen for requests
      app.listen();
    } else throw new Error("Env's not loaded correctly");
  } catch (err) {
    log.red('Error while starting the service: ', err.message);
  }
})();
