import { Controller } from '../interfaces';
import * as express from 'express';
import { Request, Response } from 'express';
import milestoneHelper from '../controller-helpers/milestone.helper';
import { sessionCheck } from '../middleware/sessionCheck';
import sendResponse from '../responses/response.helper';
class MilestoneController implements Controller {
  public path = '/milestone';

  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}/get-all`,
      sessionCheck,
      this.getAllMilestoneData
    );
    this.router.get(
      `${this.path}/get-by-projectId/:projectId`,
      sessionCheck,
      this.getMilestonesByProjectId
    );
  }

  /**
   * It gets all the milestone datacfrom its helper
   * and sends the response
   * @param req
   * @param res
   */
  private getAllMilestoneData = async (req: Request, res: Response) => {
    const pageLimit = Number(req.query.pageLimit) || 10;
    const pageNo = Number(req.query.pageNo) || 1;

    const getAllMilestone = await milestoneHelper.getMilstonesData(
      pageNo,
      pageLimit
    );

    sendResponse(res, getAllMilestone);
  };

  /**
   * It gets the milestone data for a specific project from its helper
   * and sends the response for it
   * @param req
   * @param res
   */
  private getMilestonesByProjectId = async (req: Request, res: Response) => {
    const proejctID = req.params?.projectId;

    const getAllMilestoneByProjectId =
      await milestoneHelper.getMilstonesByProjectId(proejctID);
    sendResponse(res, getAllMilestoneByProjectId);
  };
}

export default MilestoneController;
