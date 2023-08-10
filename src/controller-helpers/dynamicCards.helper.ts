import {
  DATA_MODELS,
  RESPONSE_MESSAGES,
  STATUS,
  STATUS_CODES
} from '../constants';
import mongoDataHelper from '../helpers/mongo.data.helper';
import { ESResponse } from '@interfaces';

class DynamicCard {
  static instance: DynamicCard = null;

  static getInstance = () => {
    if (!DynamicCard.instance) {
      DynamicCard.instance = new DynamicCard();
      delete DynamicCard.constructor;
    }
    return DynamicCard.instance;
  };

  /**
   * It gets the count of projects and complete projects, rejected and all proposals
   * @returns
   */
  async getCardsData(): Promise<ESResponse> {
    try {
      // getting total proposals accepted and rejected
      const totalProposals = await mongoDataHelper.getCount(
        DATA_MODELS.Proposal
      );

      // getting the total projects
      const totalProjects = await mongoDataHelper.getCount(DATA_MODELS.Project);
      // getting the total rejected proposals
      const totalRejectedProposals = await mongoDataHelper.getCount(
        DATA_MODELS.Proposal,
        { status: STATUS.REJECTED }
      );

      // getting the the total completed projects
      const totalCompletedProjects = await mongoDataHelper.getCount(
        DATA_MODELS.Project,
        { status: STATUS.COMPLETE }
      );

      return {
        data: {
          totalProposals,
          totalProjects,
          totalRejectedProposals,
          totalCompletedProjects
        },
        error: false
      };
    } catch (error) {
      return {
        data: null,
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  }
}

export default DynamicCard.getInstance();
