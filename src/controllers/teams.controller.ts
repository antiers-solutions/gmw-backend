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
  // this function sends all teams after getting it from its helper funtion as a response

  private getTeamsData = async (req: Request, res: Response) => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;
    const getAllTeams = await TeamsHelper.getTeamsData(pageNo, pageLimit);

    sendResponse(res, getAllTeams);
  };

  // this function sends a team on basis of id after getting it from its helper funtion as a response

  private searchTeamsById = async (req: Request, res: Response) => {
    const searchID = req.params?.teamId;

    const getsearchedByID = await TeamsHelper.getTeamsDataByID(searchID);

    sendResponse(res, getsearchedByID);
  };

  // this function sends a team on basis of name after getting it from its helper funtion as a response

  private searchTeamsByName = async (req: Request, res: Response) => {
    const searchedName: any = req.query?.searchedName;
    const getsearchedByName = await TeamsHelper.getTeamsDataByName(
      searchedName
    );

    sendResponse(res, getsearchedByName);
  };

  // this function modifies teams and merges them on basis of id ,after getting it from its helper funtion as a response

  private modifyTeamByName = async (req: Request, res: Response) => {
    const { updatedName, teamIds } = req.body;

    const modifiedData = await TeamsHelper.modifyTeams(updatedName, teamIds);

    sendResponse(res, modifiedData);
  };
}

export default TeamsController;
