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

  // get the total projects count
  public getProjectsCountByStatus = async (req: any, res: any) => {
    const totalProjects = await graphHelper.getProjectsCountByStatus();
    sendResponse(res, totalProjects);
  };

  //get the total purposal application
  public getProjectCountByLevel = async (req: any, res: any) => {
    const totalPurposal = await graphHelper.getProjectCountByLevel();
    sendResponse(res, totalPurposal);
  };

  //
  public getRejectedProjectsBody = async (req: any, res: any) => {
    const year = Number(req.query.year);
    console.log(year, 'year');
    const rejectedAcceptedData =
      await graphHelper.getRejectedAndAcceptedProjectsBody(year);
    sendResponse(res, rejectedAcceptedData);
  };
}

export default GraphController;
