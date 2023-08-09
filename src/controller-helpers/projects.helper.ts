import { ESResponse } from '@interfaces';
import mongoDataHelper from '../helpers/mongo.data.helper';
import { DATA_MODELS, RESPONSE_MESSAGES, STATUS_CODES } from '../constants';
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
  async getProjectData(
    pageNumber: number,
    pageSize: number
  ): Promise<ESResponse> {
    try {
      const totalCount = await mongoDataHelper.getCount('Project');

      if (pageSize <= 40) {
        // getting data of all the projects with filtered column and pagination
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
      } else {
        return {
          message: RESPONSE_MESSAGES.Max_LIMIT,
          status: STATUS_CODES.UNPROCESSABLE
        };
      }
    } catch (error) {
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }

  /**
   * handler gets proejct data on basis of id from the database
   * @param searchId
   * @returns
   */
  async getProjectDataByID(searchId: any): Promise<ESResponse> {
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
  }

  /**
   * handler gets proejct data on basis of name from the database
   * @param searchedName
   * @returns
   */
  async getProjectDataByName(searchedName: any): Promise<ESResponse> {
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
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }

  /**
   * handler is use to update status of project in database
   * @param status
   * @param id
   * @returns
   */
  async updateProjectStatus(status: string, id: string): Promise<ESResponse> {
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
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }

  /**
   * handler is use to get filtered project data on basis of level and status
   * @param pageNumber
   * @param pageSize
   * @param level
   * @param status
   * @returns
   */
  async filterProject(
    pageNumber: number,
    pageSize: number,
    level?: string,
    status?: string
  ): Promise<ESResponse> {
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
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }
}

export default ProjectHelper.getInstance();
