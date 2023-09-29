import * as config from '../../config';
import { runTeamsTests } from './TeamsTests/teams.test';
import { runGraphTests } from './GraphTests/graphs.test';
import { runProjectTests } from './ProjectsTests/projects.test';
import { runProposalsTests } from './ProposalsTests/proposals.test';
import { runMilestoneTests } from './MileStoneTests/milestones.test';
import { runGitHubHookTests } from './GithubWebhookTests/githubHooks.test';
import { runOctoConnectionTests } from './OctoConnectionTests/octoConnection.test';
import { runMilestoneGithubHookHelperTests } from './MilestoneProposals/milestoneProposals.test';

before(() => {
  config.loadEnvs();
});

describe('Unit Tests ', async () => {
  runGraphTests();
  runTeamsTests();
  runProjectTests();
  runProposalsTests();
  runMilestoneTests();
  runGitHubHookTests();
  runOctoConnectionTests();

  // need to work on it
  // runMilestoneGithubHookHelperTests();
});
