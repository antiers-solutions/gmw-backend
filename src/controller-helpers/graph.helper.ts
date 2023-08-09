import { ESResponse } from '@interfaces';
import {
  DATA_MODELS,
  RESPONSE_MESSAGES,
  STATUS_CODES,
  MONTHS
} from '../constants';
import mongoDataHelper from '../helpers/mongo.data.helper';
import redisHelper from '../helpers/redis.helper';

class GraphHelper {
  static instance: GraphHelper = null;

  static getInstance = () => {
    if (!GraphHelper.instance) {
      GraphHelper.instance = new GraphHelper();
      delete GraphHelper.constructor;
    }
    return GraphHelper.instance;
  };

  //get total project count
  getProjectsCountByStatus = async (): Promise<ESResponse> => {
    try {
      const countByStatus: any = { active: 0, hold: 0, complete: 0 };
      const totalProjects = await mongoDataHelper.findAndQueryData(
        DATA_MODELS.Project,
        {}
      );

      // looping through the projects to get the status count of the projects
      totalProjects.forEach((item: any) => {
        item.status && countByStatus[item.status]++;
      });

      const statusData: any = [];
      // formating the results in the form required in the frontend
      for (const key in countByStatus) {
        statusData.push({
          name: key.charAt(0).toUpperCase() + key.slice(1, key.length),
          value: countByStatus[key]
        });
      }
      // returning the the data for graphs
      return { data: statusData, error: false };
    } catch (err) {
      return { error: true, data: null, status: STATUS_CODES.INTERNALSERVER };
    }
  };

  //get total project count
  getProjectCountByLevel = async (): Promise<ESResponse> => {
    try {
      const countByLevel: any = { level1: 0, level2: 0, level3: 0 };

      const totalProjects = await mongoDataHelper.findAndQueryData(
        DATA_MODELS.Project,
        {}
      );

      // looping through the projects to get the level count

      totalProjects.forEach((item: any) => {
        !isNaN(Number(item.level)) &&
          item.level &&
          !(Number(item.level) > 3) &&
          countByLevel[`level${item.level}`]++;
      });

      const levelData: any = [];

      // formating the results in the form required in the frontend

      Object.values(countByLevel).forEach((item, index: number) => {
        const level = index + 1;
        const name = 'Level' + ' ' + level;
        levelData.push({ name, value: item });
      });

      // returning the the data for graphs

      return { data: levelData, error: false };
    } catch (err) {
      return { error: true, data: null, status: STATUS_CODES.INTERNALSERVER };
    }
  };

  /**
   * the helper function is use to calculate the data of accepted and rejected proposals
   * @param getDataYear
   * @returns
   */
  getRejectedAndAcceptedProjectsBody = async (
    getDataYear: number
  ): Promise<ESResponse> => {
    try {
      // getting all the proposals data
      const data = await mongoDataHelper.findAndQueryData(
        DATA_MODELS.Proposal,
        {}
      );

      const yearObejct: any = {};

      // this is the count per month for handling the accepted and rejected

      const monthCount: any = {
        January: { Accepted: 0, Rejected: 0 },
        February: { Accepted: 0, Rejected: 0 },
        March: { Accepted: 0, Rejected: 0 },
        April: { Accepted: 0, Rejected: 0 },
        May: { Accepted: 0, Rejected: 0 },
        June: { Accepted: 0, Rejected: 0 },
        July: { Accepted: 0, Rejected: 0 },
        August: { Accepted: 0, Rejected: 0 },
        September: { Accepted: 0, Rejected: 0 },
        October: { Accepted: 0, Rejected: 0 },
        November: { Accepted: 0, Rejected: 0 },
        December: { Accepted: 0, Rejected: 0 }
      };

      // looping through all the proposals present

      for (const proposal of data) {
        const date = new Date(proposal.created_at);

        const year = date.getFullYear();
        const month = date.getMonth();

        // if year and requested year is same then proceed

        if (year === getDataYear) {
          if (proposal.status === 'rejected') {
            // storing all the data in the years object

            monthCount[MONTHS[month]].Rejected++;
            yearObejct[getDataYear] = {
              [MONTHS[month]]: monthCount[MONTHS[month]],
              ...yearObejct[getDataYear]
            };
          } else if (proposal.status === 'accepted') {
            monthCount[MONTHS[month]].Accepted++;
            yearObejct[getDataYear] = {
              [MONTHS[month]]: monthCount[MONTHS[month]],
              ...yearObejct[getDataYear]
            };
          }
        }
      }

      // formating the data in the required form

      const yearlyGraphData: any = [];
      const yearUnformedData = yearObejct[getDataYear];
      // form the data for graph
      for (const item in yearUnformedData)
        yearlyGraphData.push({ name: item, ...yearUnformedData[item] });
      return { data: yearlyGraphData, error: false };
    } catch (error) {
      return { error: true, data: null, status: STATUS_CODES.INTERNALSERVER };
    }
  };
}

export default GraphHelper.getInstance();
