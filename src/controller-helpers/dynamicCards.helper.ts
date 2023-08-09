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

  // helper gets important count data of the availabe from the db

  async getCardsData(): Promise<ESResponse> {
    try {
      const totalProposals = await mongoDataHelper.getCount(
        DATA_MODELS.Proposal
      );
      const totalProjects = await mongoDataHelper.getCount(DATA_MODELS.Project);
      const totalRejectedProposals = await mongoDataHelper.getCount(
        DATA_MODELS.Proposal,
        { status: 'rejected' }
      );
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
