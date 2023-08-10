import { Controller } from '../interfaces';
import * as express from 'express';
import { Request, Response } from 'express';
import { sessionCheck } from '../middleware/sessionCheck';
import sendResponse from '../responses/response.helper';
import dynamicCardsHelper from '../controller-helpers/dynamicCards.helper';

class DynamicCardsController implements Controller {
  public path = '/dynamic-cards';

  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, sessionCheck, this.getCardsData);
  }

  /**
   * It sends all the milestone data after getting it from its helper funtion as a response
   * @param req
   * @param res
   */
  private getCardsData = async (req: Request, res: Response) => {
    const getCardsData = await dynamicCardsHelper.getCardsData();

    sendResponse(res, getCardsData);
  };
}

export default DynamicCardsController;
