import * as config from '../../config';
import { runTeamsTests } from './TeamsTests/teams.test';
import { runProposalsTests } from './ProposalsTests/proposals.test';
import { runGraphTests } from './GraphTests/graphs.test';
import { runProjectTests } from './ProjectsTests/projects.test';
import { runMilestoneTests } from './MileStoneTests/milestones.test';
import { runOctoConnectionTests } from './OctoConnectionTests/octoConnection.test';

before(() => {
  config.loadEnvs();
});

describe('Unit Tests ', async () => {
  runGraphTests();
  runTeamsTests();
  runProjectTests();
  runProposalsTests();
  runMilestoneTests();
  runOctoConnectionTests();
});
