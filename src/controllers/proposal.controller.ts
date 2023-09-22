import { Controller } from '@interfaces';
import express, { Request, Response } from 'express';
import sendResponse from '../responses/response.helper';
import { sessionCheck } from '../middleware/sessionCheck';
import proposalHelper from '../controller-helpers/proposal.helper';

class ProposalContoller implements Controller {
  path = '/proposal';
  router = express.Router();

  constructor() {
    this.initRoutes();
  }

  /**
   * initialize the routes
   */
  initRoutes = () => {
    this.router.get(`${this.path}/get-all`, sessionCheck, this.getAllProposals);
    this.router.get(
      `${this.path}/get-open-proposals`,
      sessionCheck,
      this.getOpenProposals
    );
    this.router.get(
      `${this.path}/get-by-id/:proposalId`,
      sessionCheck,
      this.getProposalById
    );
    this.router.get(
      `${this.path}/search-by-name`,
      sessionCheck,
      this.getProposalById
    );
  };

  getAllProposals = async (req: Request, res: Response) => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;

    const getAllProject = await proposalHelper.getAllProposalData(
      pageNo,
      pageLimit
    );
    sendResponse(res, getAllProject);
  };

  getOpenProposals = async (req: Request, res: Response) => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;

    const getAllProject = await proposalHelper.getOpenProposalData(
      pageNo,
      pageLimit
    );
    sendResponse(res, getAllProject);
  };

  getProposalById = async (req: Request, res: Response) => {
    console.log('entered');
    const searchID = req.params?.proposalId;
    const getsearchedByID = await proposalHelper.getProposalDataById(searchID);
    sendResponse(res, getsearchedByID);
  };

  getProposalByName = async (req: Request, res: Response) => {
    const searchedName: any = req.query.searchedName;
    const searchedResult = await proposalHelper.getProposalDataByName(
      searchedName
    );
    sendResponse(res, searchedResult);
  };
}

export default ProposalContoller;
