import mongoDataHelper from '../helpers/mongo.data.helper';
import { ESResponse } from '../interfaces/responses.interface';
import {
  DATA_MODELS,
  RESPONSE_MESSAGES,
  STATUS,
  STATUS_CODES
} from '../constants';

class ProposalHelper {
  static instance: ProposalHelper = null;

  /**
   * get the instance of ProposalHelper class
   * @returns ProposalHelper
   */
  static getInstance = () => {
    if (!ProposalHelper.instance) {
      ProposalHelper.instance = new ProposalHelper();
      delete ProposalHelper.constructor;
    }
    return ProposalHelper.instance;
  };

  /**
   * handler gets all the proposals data from the database
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  getAllProposalData = async (pageNumber: number, pageSize: number) => {
    try {
      const totalCount = await mongoDataHelper.getCount(DATA_MODELS.Proposal);

      if (pageSize <= 40) {
        // getting data of all the proposals with filtered column and pagination

        const proposals = await mongoDataHelper.findAndQueryDataWithPagination(
          DATA_MODELS.Proposal,
          {},
          pageNumber,
          pageSize
        );

        if (!proposals.length || !totalCount) {
          return {
            message: RESPONSE_MESSAGES.NOT_FOUND,
            status: STATUS_CODES.BADREQUEST
          };
        }

        return {
          data: { proposals, totalCount },
          error: false
        };
      } else {
        return {
          message: RESPONSE_MESSAGES.Max_LIMIT,
          status: STATUS_CODES.UNPROCESSABLE
        };
      }
    } catch (error) {
      console.log('error while getAllProposalData ', error.message);
      return {
        data: null,
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };

  /**
   * handler gets all the proposals data from the database
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  getOpenProposalData = async (pageNumber: number, pageSize: number) => {
    try {
      const totalCount = await mongoDataHelper.getCount(DATA_MODELS.Proposal);

      if (pageSize <= 40) {
        // getting data of all the proposals with filtered column and pagination

        const proposals = await mongoDataHelper.findAndQueryDataWithPagination(
          DATA_MODELS.Proposal,
          { status: STATUS.OPEN },
          pageNumber,
          pageSize
        );

        if (!proposals.length || !totalCount) {
          return {
            message: RESPONSE_MESSAGES.NOT_FOUND,
            status: STATUS_CODES.BADREQUEST
          };
        }

        return {
          data: { proposals, totalCount },
          error: false
        };
      } else {
        return {
          message: RESPONSE_MESSAGES.Max_LIMIT,
          status: STATUS_CODES.UNPROCESSABLE
        };
      }
    } catch (error) {
      console.log('error while getAllProposalData ', error.message);
      return {
        data: null,
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };

  /**
   * handler gets proposal data on basis of id from the database
   * @param searchId
   * @returns
   */
  public getProposalDataById = async (searchId: any): Promise<ESResponse> => {
    try {
      // gets proposal data based on the id.
      const data = await mongoDataHelper.findAndQueryData(
        DATA_MODELS.Proposal,
        {
          id: searchId
        }
      );

      if (!data.length)
        return {
          status: STATUS_CODES.NOTFOUND,
          message: RESPONSE_MESSAGES.NOT_FOUND
        };

      return { error: false, data };
    } catch (error) {
      console.log('error while getProposalDataById ', error.message);
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  };

  /**
   * handler gets proposal data on basis of name from the database
   * @param searchedName
   * @returns
   */
  public getProposalDataByName = async (
    searchedName: any
  ): Promise<ESResponse> => {
    try {
      // using the regex expression for finding the name of the proposal in the db
      const data = await mongoDataHelper.findAndQueryDataWithSelectedColumns(
        DATA_MODELS.Proposal,
        {
          proposal_name: new RegExp(`^${searchedName.toLowerCase()}`)
        },
        []
      );

      // return if data returned is empty
      if (!data.length) {
        return {
          status: STATUS_CODES.NOTFOUND,
          message: RESPONSE_MESSAGES.NOT_FOUND
        };
      }

      // return data
      return { error: false, data };
    } catch (error) {
      console.log('error while searching : ', error);
      return {
        data: null,
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };
}

// export the single instance default
export default ProposalHelper.getInstance();
