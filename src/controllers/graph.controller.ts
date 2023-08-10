import { Controller } from '../interfaces';
import * as express from 'express';
import graphHelper from '../controller-helpers/graph.helper';
import sendResponse from '../responses/response.helper';

class GraphController implements Controller {
  public path = '/graph';

  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}/get-projects-count-by-status`,
      this.getProjectsCountByStatus
    );
    this.router.get(
      `${this.path}/get-projects-count-by-level`,
      this.getProjectCountByLevel
    );

    this.router.get(
      `${this.path}/get-rejected-accepted-projects-year`,
      this.getRejectedProjectsBody
    );
  }

  /**
   * It  gets the total projects count by status from its helper
   * and sends the reponse for it
   * @param req
   * @param res
   */
  public getProjectsCountByStatus = async (req: any, res: any) => {
    const totalProjects = await graphHelper.getProjectsCountByStatus();
    sendResponse(res, totalProjects);
  };

  /**
   * It gets the total purposal application from its helper
   * and sends the response for it
   * @param req
   * @param res
   */
  public getProjectCountByLevel = async (req: any, res: any) => {
    const totalPurposal = await graphHelper.getProjectCountByLevel();
    sendResponse(res, totalPurposal);
  };

  /**
   * It gets the rejected and accepted prosposals count from its helper
   * and sends the response for it
   * @param req
   * @param res
   */
  public getRejectedProjectsBody = async (req: any, res: any) => {
    const year = Number(req.query.year);
    const rejectedAcceptedData =
      await graphHelper.getRejectedAndAcceptedProjectsBody(year);
    sendResponse(res, rejectedAcceptedData);
  };
}

export default GraphController;
