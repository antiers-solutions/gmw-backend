import * as express from 'express';
import { ERR_RES, USED_STRINGS } from '../constants';
import crypto from 'crypto';
import { Controller } from '../interfaces';
import { Request, Response } from 'express';
import GithubHookHelper from '../controller-helpers/githubHook.helper';
import { Octokit } from '@octokit/rest';
import milestoneGithubHookHelper from '../controller-helpers/milestone-githubHook.helper';
import { log } from '../utils/helper.utils';

class MilestoneGithubHookController implements Controller {
  public path = '/milestone-github';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/save-pull-merge-data`, this.saveGithubData);
    this.router.post(`${this.path}/merge-pull-request`, this.mergePullRequest);
    this.router.post(`${this.path}/webhook`, this.handleWebhook);
  }

  /**
   * Handle GitHub webhook events.
   * @param req
   * @param res
   */
  private handleWebhook = async (req: Request) => {
    try {
      const octokit = new Octokit({
        auth: process.env.GITHUB_ACCESS_TOKEN_CLASSIC
      });
      const payload = req.body;
      const eventType = req.headers['x-github-event'];

      if (eventType == 'pull_request') {
        // for later usage
        // const repositoryName = payload.repository.full_name;
        const commitHash = payload.after;

        // Use the GitHub API to fetch the list of files changed in the commit
        const response = await octokit.repos.getCommit({
          owner: payload.repository.owner.name,
          repo: payload.repository.name,
          ref: commitHash
        });

        const filesChanged = response.data.files;
        log.log('Files changed in the push event:', filesChanged);
      }

      if (eventType === 'issue_comment') {
        const commentText = payload.comment.body;
        const pullRequestTitle = payload.issue.title;
        log.log(
          `New comment on pull request "${pullRequestTitle}": ${commentText}`
        );
      }

      if (eventType === 'push') {
        // for later usage
        // const repositoryName = payload.repository.full_name;
        const commitHash = payload.after;

        // Use the GitHub API to fetch the list of files changed in the commit
        const response = await octokit.repos.getCommit({
          owner: payload.repository.owner.name,
          repo: payload.repository.name,
          ref: commitHash
        });

        const filesChanged = response.data.files;
        log.log('Files changed in the push event:', filesChanged);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * It gets the github data of pull and merge request
   * @param req
   * @param res
   */
  private saveGithubData = async (req: Request, res: Response) => {
    try {
      // for later usage
      // const event = req.get('X-GitHub-Event');

      const secret = process.env.WEBHOOK_REQUEST_SECRET_MILESTONE;
      const signature = req.headers[USED_STRINGS.X_HUB_SIGNATURE_256];

      const hmac = crypto.createHmac(USED_STRINGS.SHA256, secret);
      const body = JSON.stringify(req.body);
      hmac.update(body);

      const calculatedSignature = `${USED_STRINGS.SHA256}=${hmac.digest(
        'hex'
      )}`;

      if (signature === calculatedSignature) {
        const result = await milestoneGithubHookHelper.saveGithubData(req.body);
        if (result?.error)
          throw new Error('Issue while saving github webhook (milestone) data');
        else res.status(200);
      } else throw new Error('Invalid Request');
    } catch (error) {
      log.error('Milestone webhook error:\n', error);
      res.status(500).send({ error: ERR_RES.INTERNAL_SERVER });
    }
  };

  /**
   * It handles the merged pull requests
   * @param req
   * @param res
   */
  private mergePullRequest = async (req: Request, res: Response) => {
    try {
      const prNumber = req.body?.pr_number;
      if (prNumber) {
        const result = await GithubHookHelper.mergePullRequest(prNumber);
        if (result.error) throw new Error();
        else res.status(200).send({ data: result.data });
      } else {
        res.status(500).send({ error: ERR_RES.INVALID_PR_NUM });
      }
    } catch (error) {
      res.status(500).send({ error: ERR_RES.INTERNAL_SERVER });
    }
  };
}

export default MilestoneGithubHookController;
