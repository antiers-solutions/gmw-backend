import { Octokit } from '@octokit/rest';

class OctoHelper {
  static octoConn: Octokit = null;
  static instance: OctoHelper = null;

  constructor() {
    if (!OctoHelper.octoConn) OctoHelper.octoConnection();
  }

  static getInstance = () => {
    if (!OctoHelper.instance) {
      OctoHelper.instance = new OctoHelper();
      delete OctoHelper.constructor;
    }
    return OctoHelper.instance;
  };

  /***************************** static member for initlization ********************************/

  // get octo object
  static octoConnection = () => {
    OctoHelper.octoConn = new Octokit({
      auth: process.env.GITHUB_ACCESS_TOKEN_CLASSIC
    });
  };

  // Disconnect or "clean up" Octokit by setting it to null
  disconnectOcto = () => {
    OctoHelper.octoConn = null;
  };

  //get the octo instance
  static getOctoInstance = () => OctoHelper.octoConn;

  /****************************** octo request helper *******************************************/
  //request the data from octo
  octoRequest = async (route: string, options?: any): Promise<any> => {
    try {
      const res: any = await OctoHelper.octoConn.request(route, options);
      return res;
    } catch (err) {
      console.log('Error while fething data from github api: ', err);
      return null;
    }
  };
}

export default OctoHelper.getInstance();
