import { Controller } from '../interfaces';
import * as express from 'express';
import { Request, Response } from 'express';
import projectsHelper from '../controller-helpers/projects.helper';
import { sessionCheck } from '../middleware/sessionCheck';
import sendResponse from '../responses/response.helper';

class ProjectController implements Controller {
  public path = '/project';
  public router = express.Router();

  // init the routes
  constructor() {
    this.initializeRoutes();
  }

  //route initlizer
  private initializeRoutes() {
    this.router.get(
      `${this.path}/get-all`,
      sessionCheck,
      this.getAllProjectsData
    );
    this.router.get(
      `${this.path}/get-by-id/:projectId`,
      sessionCheck,
      this.getProjectById
    );
    this.router.get(
      `${this.path}/search-by-name`,
      sessionCheck,
      this.searchProjectByName
    );
    this.router.get(`${this.path}/filter`, sessionCheck, this.filterProjects);
    this.router.put(
      `${this.path}/update-status`,
      sessionCheck,
      this.updateProjectStatus
    );
  }

  /**
   * It is used for calling the get all projects helper
   * and sending response for it
   * @param req
   * @param res
   */
  private getAllProjectsData = async (req: Request, res: Response) => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;
    const sortBy: any = req.query.sortBy?.toString()?.toLowerCase();
    const orderBy: any = req.query.orderBy?.toString()?.toLowerCase();

    console.log(sortBy, orderBy);

    const getAllProject = await projectsHelper.getProjectData(
      pageNo,
      pageLimit,
      sortBy,
      orderBy
    );
    sendResponse(res, getAllProject);
  };

  /**
   * It is used for calling the get project by id helper
   * and sending response for it
   * @param req
   * @param res
   */
  private getProjectById = async (req: Request, res: Response) => {
    const searchID = req.params?.projectId;
    const getsearchedByID = await projectsHelper.getProjectDataByID(searchID);
    sendResponse(res, getsearchedByID);
  };

  /**
   * It is used for calling the search project helper
   * and sending response for it
   * @param req
   * @param res
   */
  private searchProjectByName = async (req: Request, res: Response) => {
    const searchedName: any = req.query.searchedName;

    const getsearchedByID = await projectsHelper.getProjectDataByName(
      searchedName
    );

    sendResponse(res, getsearchedByID);
  };

  /**
   * It is used for calling the filter project helper
   * and sending response for it
   * @param req
   * @param res
   * @returns
   */
  private filterProjects = async (req: Request, res: Response) => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;

    const level: any = req.query?.level;
    const status: any = req.query?.status;
    const filteredData = await projectsHelper.filterProject(
      pageNo,
      pageLimit,
      level,
      status
    );
    return sendResponse(res, filteredData);
  };

  /**
   * It is used for calling the update status of project helper
   * and sending response for it
   * @param req
   * @param res
   */
  private updateProjectStatus = async (req: Request, res: Response) => {
    const { updatedStatus, id } = req.body;

    const updatesData = await projectsHelper.updateProjectStatus(
      updatedStatus,
      id
    );
    sendResponse(res, updatesData);
  };
}

export default ProjectController;
