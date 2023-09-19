import { DATA_MODELS, RESPONSE_MESSAGES, STATUS_CODES } from '../constants';
import mongoDataHelper from '../helpers/mongo.data.helper';
import { ESResponse } from '@interfaces';

class MilestoneProposalsHelper {
  static instance: MilestoneProposalsHelper = null;

  static getInstance = () => {
    if (!MilestoneProposalsHelper.instance) {
      MilestoneProposalsHelper.instance = new MilestoneProposalsHelper();
      delete MilestoneProposalsHelper.constructor;
    }
    return MilestoneProposalsHelper.instance;
  };

  /**
   * helper gets all the milestone proposals data from the database
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  public getMilstonesProposalsData = async (
    pageNumber?: number,
    pageSize?: number
  ): Promise<ESResponse> => {
    try {
      const totalCount = await mongoDataHelper.getCount(
        DATA_MODELS.MilestoneProposal
      );

      if (pageSize <= 40) {
        // getting all the milestones data with pagination and selected data.
        const milestoneProposals =
          await mongoDataHelper.findAndQueryDataWithPagination(
            DATA_MODELS.MilestoneProposal,
            {},
            pageNumber,
            pageSize
          );
        // return if not present
        if (!milestoneProposals.length) {
          return {
            status: STATUS_CODES.NOTFOUND,
            message: RESPONSE_MESSAGES.NOT_FOUND
          };
        }
        // return the data
        return { data: { milestoneProposals, totalCount }, error: false };
      } else {
        return {
          status: STATUS_CODES.UNPROCESSABLE,
          message: RESPONSE_MESSAGES.Max_LIMIT
        };
      }
    } catch (error) {
      return {
        data: null,
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };

  /**
   * helper gets the specifc milestone proposal data from the database based on the searched id
   * @param searchId
   * @returns
   */
  public getMilestoneProposalsDataById = async (
    searchId: any
  ): Promise<ESResponse> => {
    try {
      // gets project data based on the id.
      const data = await mongoDataHelper.findAndQueryData(
        DATA_MODELS.MilestoneProposal,
        {
          id: searchId
        }
      );
      // if not present then return
      if (!data.length)
        return {
          status: STATUS_CODES.NOTFOUND,
          message: RESPONSE_MESSAGES.NOT_FOUND
        };
      return { error: false, data };
    } catch (error) {
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  };
}

export default MilestoneProposalsHelper.getInstance();
