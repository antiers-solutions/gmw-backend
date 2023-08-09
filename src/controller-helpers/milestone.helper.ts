import { DATA_MODELS, RESPONSE_MESSAGES, STATUS_CODES } from '../constants';
import mongoDataHelper from '../helpers/mongo.data.helper';
import { ESResponse } from '@interfaces';

class MilestoneHelper {
  static instance: MilestoneHelper = null;

  static getInstance = () => {
    if (!MilestoneHelper.instance) {
      MilestoneHelper.instance = new MilestoneHelper();
      delete MilestoneHelper.constructor;
    }
    return MilestoneHelper.instance;
  };

  /**
   * helper gets all the milestone data from the database
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  async getMilstonesData(
    pageNumber?: number,
    pageSize?: number
  ): Promise<ESResponse> {
    try {
      const totalCount = await mongoDataHelper.getCount(DATA_MODELS.Milestone);

      if (pageSize <= 40) {
        // getting all the milestones data with pagination and selected data.

        const milestones =
          await mongoDataHelper.findAndQueryDataWithSelectedColumnsAndPagination(
            DATA_MODELS.Milestone,
            {},
            [
              'id',
              'file_name',
              'project_id',
              'project_md_link',
              'status',
              'cost',
              'milesoneNo',
              'merged_at'
            ],
            pageNumber,
            pageSize
          );
        // return if not present
        if (!milestones.length) {
          return {
            status: STATUS_CODES.NOTFOUND,
            message: RESPONSE_MESSAGES.NOT_FOUND
          };
        }
        // return the data
        return { data: { milestones, totalCount }, error: false };
      } else {
        return {
          status: STATUS_CODES.NOTFOUND,
          message: RESPONSE_MESSAGES.NOT_FOUND
        };
      }
    } catch (error) {
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }

  /**
   * helper gets a milestone data on basis of project id from the database
   * @param projectId
   * @returns
   */

  async getMilstonesByProjectId(projectId: string): Promise<ESResponse> {
    try {
      // getting the milestone data on basis of the project id provided
      const data = await mongoDataHelper.findAndQueryDataWithSelectedColumns(
        DATA_MODELS.Milestone,
        {
          project_id: projectId
        },
        [
          'id',
          'file_name',
          'project_id',
          'project_md_link',
          'status',
          'cost',
          'milesoneNo',
          'merged_at'
        ]
      );
      // return if not present

      if (!data.length) {
        return {
          status: STATUS_CODES.NOTFOUND,
          message: RESPONSE_MESSAGES.NOT_FOUND
        };
      }
      // return the data

      return { data, error: false };
    } catch (error) {
      console.log('error from helper', error);
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }
}

export default MilestoneHelper.getInstance();
