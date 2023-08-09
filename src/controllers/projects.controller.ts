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

  // controller sends all the project data after getting it from its helper funtion as a response
  private getAllProjectsData = async (req: Request, res: Response) => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;

    const getAllProject = await projectsHelper.getProjectData(
      pageNo,
      pageLimit
    );
    sendResponse(res, getAllProject);
  };

  // controller sends a project from its id  after getting it from its helper funtion as a response
  private getProjectById = async (req: Request, res: Response) => {
    const searchID = req.params?.projectId;
    const getsearchedByID = await projectsHelper.getProjectDataByID(searchID);
    sendResponse(res, getsearchedByID);
  };

  // controller sends a project from its name after getting it from its helper funtion as a response
  private searchProjectByName = async (req: Request, res: Response) => {
    const searchedName: any = req.query.searchedName;

    const getsearchedByID = await projectsHelper.getProjectDataByName(
      searchedName
    );

    sendResponse(res, getsearchedByID);
  };

  // controller sends a project filtered on basis of level and status after getting it from its helper funtion as a response
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

  // controller for updating the status of project
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
