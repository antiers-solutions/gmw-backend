import { Controller } from '../interfaces';
import * as express from 'express';
import { Request, Response } from 'express';
import TeamsHelper from '../controller-helpers/teams.helper';
import { sessionCheck } from '../middleware/sessionCheck';
import sendResponse from '../responses/response.helper';

class TeamsController implements Controller {
  public path = '/teams';

  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/get-all`, sessionCheck, this.getTeamsData);
    this.router.get(
      `${this.path}/get-by-id/:teamId`,
      sessionCheck,
      this.searchTeamsById
    );
    this.router.get(
      `${this.path}/search-by-name`,
      sessionCheck,
      this.searchTeamsByName
    );
    this.router.put(
      `${this.path}/merge-team`,
      sessionCheck,
      this.modifyTeamByName
    );
  }

  /**
   * It is used for getting all teams data from its helper
   * and sends response for it
   * @param req
   * @param res
   */
  private getTeamsData = async (req: Request, res: Response): Promise<void> => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;
    const getAllTeams = await TeamsHelper.getTeamsData(pageNo, pageLimit);

    sendResponse(res, getAllTeams);
  };

  /**
   * It is used for getting team by id data from its helper
   * and sends response for it
   * @param req
   * @param res
   */
  private searchTeamsById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const searchID = req.params?.teamId;

    const getsearchedByID = await TeamsHelper.getTeamsDataByID(searchID);

    sendResponse(res, getsearchedByID);
  };

  /**
   * It is used for getting searched teams by name data from its helper
   * and sends response for it
   * @param req
   * @param res
   */
  private searchTeamsByName = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const searchedName: any = req.query?.searchedName;
    const getsearchedByName = await TeamsHelper.getTeamsDataByName(
      searchedName
    );

    sendResponse(res, getsearchedByName);
  };

  /**
   * It is used for calling the merged teams helper
   * and sends response for it
   * @param req
   * @param res
   */
  private modifyTeamByName = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { updatedName, teamIds } = req.body;

    const modifiedData = await TeamsHelper.modifyTeams(updatedName, teamIds);

    sendResponse(res, modifiedData);
  };
}

export default TeamsController;
