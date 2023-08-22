import { ESResponse } from '@interfaces';
import mongoDataHelper from '../helpers/mongo.data.helper';
import {
  DATA_MODELS,
  RESPONSE_MESSAGES,
  SORT_NAME,
  STATUS_CODES
} from '../constants';
mongoDataHelper;

class ProjectHelper {
  static instance: ProjectHelper = null;

  static getInstance = () => {
    if (!ProjectHelper.instance) {
      ProjectHelper.instance = new ProjectHelper();
      delete ProjectHelper.constructor;
    }
    return ProjectHelper.instance;
  };

  /**
   * handler gets all the projects data from the database
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  public getProjectData = async (
    pageNumber: number,
    pageSize: number,
    sortBy?: string,
    orderBy?: string
  ): Promise<ESResponse> => {
    try {
      const totalCount = await mongoDataHelper.getCount(DATA_MODELS.Project);

      if (pageSize <= 40) {
        // getting data of all the projects with filtered column and pagination

        if (sortBy === SORT_NAME.PROJECT_NAME) {
          console.log('enetred in name check');
          const projects = await mongoDataHelper.findSelectedDataWithPagination(
            DATA_MODELS.Project,
            {},
            [
              'id',
              'start_date',
              'project_name',
              'status',
              'total_cost',
              'total_duration',
              'team_id',
              'level',
              'milestones',
              'totalMilestones'
            ],
            pageNumber,
            pageSize,
            { project_name: orderBy === 'asc' ? 1 : -1 }
          );

          // if no data then return
          if (!projects.length || !totalCount) {
            return {
              message: RESPONSE_MESSAGES.NOT_FOUND,
              status: STATUS_CODES.BADREQUEST
            };
          }

          // return the data
          return {
            data: { projects, totalCount },
            error: false
          };
        } else if (sortBy === SORT_NAME.Date) {
          console.log('enetred in date check');
          const projects = await mongoDataHelper.findSelectedDataWithPagination(
            DATA_MODELS.Project,
            {},
            [
              'id',
              'start_date',
              'project_name',
              'status',
              'total_cost',
              'total_duration',
              'team_id',
              'level',
              'milestones',
              'totalMilestones'
            ],
            pageNumber,
            pageSize,
            { start_date: orderBy === 'asc' ? 1 : -1 }
          );

          // if no data then return
          if (!projects.length || !totalCount) {
            return {
              message: RESPONSE_MESSAGES.NOT_FOUND,
              status: STATUS_CODES.BADREQUEST
            };
          }

          // return the data
          return {
            data: { projects, totalCount },
            error: false
          };
        } else {
          console.log('entered the normal check');
          const projects = await mongoDataHelper.findSelectedDataWithPagination(
            DATA_MODELS.Project,
            {},
            [
              'id',
              'start_date',
              'project_name',
              'status',
              'total_cost',
              'total_duration',
              'team_id',
              'level',
              'milestones',
              'totalMilestones'
            ],
            pageNumber,
            pageSize
          );

          // if no data then return
          if (!projects.length || !totalCount) {
            return {
              message: RESPONSE_MESSAGES.NOT_FOUND,
              status: STATUS_CODES.BADREQUEST
            };
          }

          // return the data
          return {
            data: { projects, totalCount },
            error: false
          };
        }
      } else {
        return {
          message: RESPONSE_MESSAGES.Max_LIMIT,
          status: STATUS_CODES.UNPROCESSABLE
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
   * handler gets proejct data on basis of id from the database
   * @param searchId
   * @returns
   */
  public getProjectDataByID = async (searchId: any): Promise<ESResponse> => {
    try {
      // gets project data based on the id.
      const data = await mongoDataHelper.findAndQueryData(DATA_MODELS.Project, {
        id: searchId
      });
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

  /**
   * handler gets proejct data on basis of name from the database
   * @param searchedName
   * @returns
   */
  public getProjectDataByName = async (
    searchedName: any
  ): Promise<ESResponse> => {
    try {
      // using the regex expression for finding the name of the project in the db
      const data = await mongoDataHelper.findAndQueryDataWithSelectedColumns(
        DATA_MODELS.Project,
        {
          project_name: new RegExp(`^${searchedName.toLowerCase()}`)
        },
        [
          'id',
          'start_date',
          'html_url',
          'payment_details',
          'project_name',
          'status',
          'total_cost',
          'total_duration',
          'team_id',
          'level',
          'milestones',
          'totalMilestones',
          'file_name'
        ]
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
      return {
        data: null,
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };

  /**
   * handler is use to update status of project in database
   * @param status
   * @param id
   * @returns
   */
  public updateProjectStatus = async (
    status: string,
    id: string
  ): Promise<ESResponse> => {
    try {
      if (status) {
        // if status is present then it updates the status of the proejct manually
        const data = await mongoDataHelper.updateData(
          DATA_MODELS.Project,
          { id: id },
          { status: status }
        );
        // if not present then return
        if (!data.modifiedCount) {
          return {
            status: STATUS_CODES.NOTFOUND,
            message: RESPONSE_MESSAGES.NOT_FOUND
          };
        }

        return { data: 'success', error: false };
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
   * handler is use to get filtered project data on basis of level and status
   * @param pageNumber
   * @param pageSize
   * @param level
   * @param status
   * @returns
   */
  public filterProject = async (
    pageNumber: number,
    pageSize: number,
    level?: string,
    status?: string
  ): Promise<ESResponse> => {
    try {
      if (pageSize <= 40) {
        // gettind data in filtered data when fileration is done on basis of level and status both
        if (level && status) {
          const filteredData =
            await mongoDataHelper.findSelectedDataWithPagination(
              DATA_MODELS.Project,
              {
                level: level,
                status: status
              },
              [
                'id',
                'start_date',
                'project_name',
                'status',
                'total_cost',
                'total_duration',
                'team_id',
                'level',
                'milestones',
                'totalMilestones'
              ],

              pageNumber,
              pageSize
            );

          const count = await mongoDataHelper.getCount(DATA_MODELS.Project, {
            level: level,
            status: status
          });

          // if not present then return
          if (!filteredData.length) {
            return {
              status: STATUS_CODES.NOTFOUND,
              message: RESPONSE_MESSAGES.NOT_FOUND
            };
          }
          return { error: false, data: { filteredData, count } };
        }

        // gettind data in filtered data when fileration is done on basis of level
        else if (level) {
          const filteredData =
            await mongoDataHelper.findSelectedDataWithPagination(
              DATA_MODELS.Project,
              {
                level: level
              },
              [
                'id',
                'start_date',
                'project_name',
                'status',
                'total_cost',
                'total_duration',
                'team_id',
                'level',
                'milestones',
                'totalMilestones'
              ],

              pageNumber,
              pageSize
            );

          const count = await mongoDataHelper.getCount(DATA_MODELS.Project, {
            level: level
          });

          // if not present then return
          if (!filteredData.length) {
            return {
              status: STATUS_CODES.NOTFOUND,
              message: RESPONSE_MESSAGES.NOT_FOUND
            };
          }

          return { error: false, data: { filteredData, count } };
        }

        // gettind data in filtered data when fileration is done on basis of status
        else if (status) {
          const filteredData =
            await mongoDataHelper.findSelectedDataWithPagination(
              DATA_MODELS.Project,
              {
                status: status
              },

              [
                'id',
                'start_date',
                'project_name',
                'status',
                'total_cost',
                'total_duration',
                'team_id',
                'level',
                'milestones',
                'totalMilestones'
              ],

              pageNumber,
              pageSize
            );

          const count = await mongoDataHelper.getCount(DATA_MODELS.Project, {
            status: status
          });

          // if not present then return
          if (!filteredData.length) {
            return {
              status: STATUS_CODES.NOTFOUND,
              message: RESPONSE_MESSAGES.NOT_FOUND
            };
          }
          return { error: false, data: { filteredData, count } };
        }

        return {
          status: STATUS_CODES.NOTFOUND,
          message: RESPONSE_MESSAGES.NOT_FOUND
        };
      } else {
        return {
          message: RESPONSE_MESSAGES.Max_LIMIT,
          status: STATUS_CODES.UNPROCESSABLE
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
}

export default ProjectHelper.getInstance();
