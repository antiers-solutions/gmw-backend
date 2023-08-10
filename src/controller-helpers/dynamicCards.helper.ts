import { DATA_MODELS, RESPONSE_MESSAGES, STATUS_CODES } from '../constants';
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
   * It gets the count data of the availabe parameters from the db
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
        { status: 'rejected' }
      );

      // getting the the total completed projects
      const totalCompletedProjects = await mongoDataHelper.getCount(
        DATA_MODELS.Project,
        { status: 'complete' }
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
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }
}

export default DynamicCard.getInstance();
