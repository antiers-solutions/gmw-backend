import axios from 'axios';
import { NET_ERROR_CODE } from '../constants';

// logging helper class
class Logs {
  static log: Logs = null;
  logging = Number(process.env.LOGGING) === 0 ? false : true;

  static getInstance = () => {
    if (!Logs.log) {
      Logs.log = new Logs();
      delete Logs.constructor;
    }
    return Logs.log;
  };

  /**
   * error logs
   * @param arg
   */
  red = (...arg: any) => {
    console.log('\x1b[31m', ...arg, '\x1b[39m');
  };

  /**
   * success operation logs
   * @param arg
   */
  green = (...arg: any) => {
    console.log('\x1b[32m', ...arg, '\x1b[39m');
  };

  /**
   * general warning logs
   * @param arg
   */
  blue = (...arg: any) => {
    console.log('\x1b[34m', ...arg, '\x1b[39m');
  };

  /**
   * non-color logs
   * @param arg
   */
  log = (...arg: any) => {
    if (!this.logging) return;
    console.log(...arg);
  };

  /**
   * non-color logs can't off using the LOGGING flag
   * @param arg
   */
  logc = (...arg: any) => {
    console.log(...arg);
  };

  /**
   * direct logs to standard error
   */
  error = (...arg: any) => {
    console.error('\x1b[31m', ...arg, '\x1b[39m');
  };

  /**
   * warning logs
   */
  warning = (...arg: any) => {
    console.warn(...arg);
  };
}
export const log = Logs.getInstance();

// http get requests helper
export const get = async (url: string, options: any = null) => {
  try {
    const res: any = await axios.get(url, options);
    return res;
  } catch (err) {
    // if error is DNS lookup error then try again
    if (err.message?.includes(NET_ERROR_CODE.EAI_AGAIN)) {
      log.blue('DNS lookup error, Trying again...');
      const res: any = get(url, options);
      return res;
    }
    log.error('Error in http get method helper:\n', err.message);
    return null;
  }
};
