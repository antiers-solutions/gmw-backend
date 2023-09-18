import { Controller } from '../interfaces';

import * as express from 'express';
import { Request, Response } from 'express';
import { sessionCheck } from '../middleware/sessionCheck';
import sendResponse from '../responses/response.helper';
import milestoneProposalsHelper from '../controller-helpers/milestone-proposals.helper';
class MilestoneProposalsController implements Controller {
  public path = '/milestone-proposals';

  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}/get-all`,
      sessionCheck,
      this.getAllMilestoneProposalsData
    );

    this.router.get(
      `${this.path}/get-by-id/:projectId`,
      sessionCheck,
      this.getMilestoneProposalsById
    );
  }

  /**
   * It gets all the milestone proposals data from its helper
   * and sends the response
   * @param req
   * @param res
   */
  private getAllMilestoneProposalsData = async (
    req: Request,
    res: Response
  ) => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;

    const getAllMilestone =
      await milestoneProposalsHelper.getMilstonesProposalsData(
        pageNo,
        pageLimit
      );

    sendResponse(res, getAllMilestone);
  };

  /**
   * It gets specific milestone proposal data from its helper
   * @param req
   * @param res
   */

  private getMilestoneProposalsById = async (req: Request, res: Response) => {
    const searchID = req.params?.projectId;
    const getMilestoneProposalsById =
      await milestoneProposalsHelper.getMilestoneProposalsDataById(searchID);
    sendResponse(res, getMilestoneProposalsById);
  };
}

export default MilestoneProposalsController;
