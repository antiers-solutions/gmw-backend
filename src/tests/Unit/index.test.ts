import * as config from '../../config';
import { runTeamsTests } from './TeamsTests/teams.test';
import { runGraphTests } from './GraphTests/graphs.test';
import { runProjectTests } from './ProjectsTests/projects.test';
import { runProposalsTests } from './ProposalsTests/proposals.test';
import { runMilestoneTests } from './MileStoneTests/milestones.test';
import { runGitHubHookTests } from './GithubWebhookTests/githubHooks.test';
import { runOctoConnectionTests } from './OctoConnectionTests/octoConnection.test';

before(() => {
  config.loadEnvs();
});

describe('Unit Tests ', async () => {
  runGraphTests();
  runTeamsTests();
  runProjectTests();
  runGitHubHookTests();
  // runProposalsTests();
  // runMilestoneTests();
  // runOctoConnectionTests();
});
