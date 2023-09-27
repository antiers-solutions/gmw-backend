import { log } from '../utils/helper.utils';
import { ObjectId } from 'mongodb';

// get the grant data from json files
export const getGrantData = () => {
  try {
    const Milestone = transformJson('./w3f.milestones.json');
    const Project = transformJson('./w3f.projects.json');
    const Proposal = transformJson('./w3f.proposals.json');
    const Team = transformJson('./w3f.teams.json');

    return { Team, Project, Proposal, Milestone };
  } catch (err) {
    log.red(
      'Error while getting the grant data from json file:\n',
      err.message
    );
    return null;
  }
};

const transformJson = (jsonModule: string) => {
  return JSON.parse(JSON.stringify(require(jsonModule)), (key, value) => {
    if (key === '_id' && typeof value === 'object') {
      return new ObjectId(value.$oid);
    }
    if (
      key === 'start_date' ||
      key === 'created_at' ||
      key === 'updated_at' ||
      (key === 'merged_at' && typeof value === 'object')
    ) {
      return new Date(value?.$date) || '';
    }
    return value;
  });
};
