import { config } from 'dotenv';
import { resolve } from 'path';
import { log } from '../utils/helper.utils';
import { ENVIROMENTS } from '../constants';

/**
 * load the env for different enviroment
 * @returns
 */
export const loadEnvs = () => {
  try {
    const enviroment = process.env.NODE_ENV || ENVIROMENTS.DEVELOPMENT;
    const port = process.env.PORT;

    // check if the port number found in process env then
    // the env is already loaded using the initial process starting
    if (Number(port)) {
      log.green(`#${enviroment} enviroment`);
      return true;
    }

    if (enviroment === ENVIROMENTS.DEVELOPMENT) {
      log.blue(`#${enviroment} enviroment`);
      load('local.env');
    } else if (enviroment === ENVIROMENTS.STAGE) {
      log.blue(`#${enviroment} enviroment`);
      load('stage.env');
    } else if (enviroment === ENVIROMENTS.PRODUCTION) {
      log.green(`#${enviroment} enviroment`);
      load('prod.env');
    } else if (enviroment === ENVIROMENTS.QA) {
      log.blue(`#${enviroment} enviroment`);
      load('qa.env');
    } else if (enviroment === ENVIROMENTS.TEST) {
      log.blue(`#${enviroment} enviroment`);
      load('test.env');
    } else {
      // if no NODE_ENV is set then by default load data from local.env file
      log.blue(`#${enviroment || ENVIROMENTS.DEVELOPMENT} enviroment`);
      load('local.env');
    }
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * load the data from env file
 * @param path (load data from following file)
 */
const load = (fileName: string) => {
  config({ path: resolve(__dirname, `./${fileName}`) });
};
