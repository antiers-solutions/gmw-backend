import { DATA_MODELS, RESPONSE_MESSAGES, STATUS_CODES } from '../constants';
import mongoDataHelper from '../helpers/mongo.data.helper';
import { ESResponse } from '@interfaces';
import { v4 } from 'uuid';

class TeamsHelper {
  static instance: TeamsHelper = null;

  static getInstance = () => {
    if (!TeamsHelper.instance) {
      TeamsHelper.instance = new TeamsHelper();
      delete TeamsHelper.constructor;
    }
    return TeamsHelper.instance;
  };

  /**
   * helper gets all teams data from the database
   * @param pageNumber
   * @param pageSize
   * @returns
   */
  public getTeamsData = async (
    pageNumber?: number,
    pageSize?: number
  ): Promise<ESResponse> => {
    try {
      const totalCount = await mongoDataHelper.getCount(DATA_MODELS.Team);

      // only 40 page size is allowed limit for data
      if (pageSize > 40)
        return {
          message: RESPONSE_MESSAGES.Max_LIMIT,
          status: STATUS_CODES.UNPROCESSABLE
        };

      const teams = await mongoDataHelper.findSelectedDataWithPagination(
        DATA_MODELS.Team,
        {},
        ['id', 'projects', 'name'],
        pageNumber,
        pageSize
      );

      // check if team and team_count found or not
      if (!teams.length || !totalCount) {
        return {
          message: RESPONSE_MESSAGES.NOT_FOUND,
          status: STATUS_CODES.BADREQUEST
        };
      }

      // sending the status of each team with is own object
      const teamsDataWithProjectStatus: any = [];
      for (const team of teams) {
        const status: any = { active: 0, complete: 0, hold: 0 };
        status[team.projects[0].status]++;
        teamsDataWithProjectStatus.push({
          id: team.id,
          projects: team.projects,
          name: team.name,
          projectStatus: status
        });
      }

      return {
        data: { totalCount, teamsDataWithProjectStatus },
        error: false
      };
    } catch (err) {
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  };

  /**
   * helper gets team data on basis of id from the database
   * @param searchID
   * @returns
   */
  public getTeamsDataByID = async (searchID: any): Promise<ESResponse> => {
    try {
      const teamData = await mongoDataHelper.findAndQueryData(
        DATA_MODELS.Team,
        { id: searchID }
      );

      // getting the filtered data for response of teams
      const projectsData =
        await mongoDataHelper.findAndQueryDataWithSelectedColumns(
          DATA_MODELS.Project,
          { team_id: searchID },
          [
            'id',
            'start_date',
            'payment_details',
            'project_name',
            'status',
            'total_cost',
            'total_duration',
            'team_id',
            'level',
            'milestones',
            'totalMilestones'
          ]
        );

      if (!teamData.length || !projectsData.length) {
        return {
          status: STATUS_CODES.NOTFOUND,
          message: RESPONSE_MESSAGES.NOT_FOUND
        };
      }

      return {
        data: { teamData: teamData[0], projectsData },
        error: false
      };
    } catch (error) {
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  };

  /**
   * this helper gets team data on basis of name from the database
   * @param searchedName
   * @returns
   */
  async getTeamsDataByName(searchedName?: any): Promise<ESResponse> {
    try {
      // using the regex expression for finding the name of the team in the db
      const teams = await mongoDataHelper.findAndQueryData(DATA_MODELS.Team, {
        name: new RegExp(`^${searchedName.toLowerCase()}`)
      });

      // sending the status of each team with is own object
      const teamsDataWithProjectStatus: any = [];
      for (const team of teams) {
        const status: any = { active: 0, complete: 0, hold: 0 };
        status[team.projects[0].status]++;
        teamsDataWithProjectStatus.push({
          id: team.id,
          projects: team.projects,
          name: team.name,
          projectStatus: status
        });
      }

      // sending total teams data
      const totalCount = await mongoDataHelper.getCount(DATA_MODELS.Team);

      // return if data returned is empty
      if (!teams.length) {
        return {
          status: STATUS_CODES.NOTFOUND,
          message: RESPONSE_MESSAGES.NOT_FOUND
        };
      }
      return { data: { totalCount, teamsDataWithProjectStatus }, error: false };
    } catch (error) {
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }

  /**
   * this helper is use to merge teams in the database with the new name as a single team
   * @param newName
   * @param ids
   * @returns
   */
  async modifyTeams(newName: string, ids: [string]): Promise<ESResponse> {
    try {
      //create data container the data for merged team
      const newData: any = { members: [], projects: [] };

      //get the team one by one and merge there projects and members
      for (const ID of ids) {
        const teamData = await this.getTeamsDataByID(ID);

        // return if team not found
        if (teamData?.status === STATUS_CODES.NOTFOUND) return teamData;

        // merge projects and team members
        newData?.members.push(...teamData.data.teamData.members);
        newData?.projects.push(...teamData.data.teamData.projects);

        //delete the old teams
        await mongoDataHelper.removeSingleData(DATA_MODELS.Team, { id: ID });
      }

      //create a new id for new merged team
      const newTeamId = v4();

      //save the new merged team
      await mongoDataHelper.savaData(DATA_MODELS.Team, {
        id: newTeamId,
        name: newName.toLowerCase(),
        ...newData
      });

      //update the team id in projects
      for (const project of newData.projects) {
        await mongoDataHelper.updateData(
          DATA_MODELS.Project,
          { id: project.projectId },
          { $set: { team_id: newTeamId } }
        );
      }

      return { data: newTeamId, error: false };
    } catch (error) {
      return { data: null, error: true, status: STATUS_CODES.INTERNALSERVER };
    }
  }
}

export default TeamsHelper.getInstance();
