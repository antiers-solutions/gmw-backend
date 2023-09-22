import * as express from 'express';
import { ERR } from '../constants';
import crypto from 'crypto';
import { Controller } from '../interfaces';
import { Request, Response } from 'express';
import GithubHookHelper from '../controller-helpers/githubHook.helper';
import { Octokit } from '@octokit/rest';
import milestoneGithubHookHelper from '../controller-helpers/milestone-githubHook.helper';

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
  private handleWebhook = async (req: Request, res: Response) => {
    try {
      const octokit = new Octokit({
        auth: process.env.GITHUB_ACCESS_TOKEN_CLASSIC
      });
      const payload = req.body;
      const eventType = req.headers['x-github-event'];
      console.log(eventType, 'event type');

      if (eventType == 'pull_request') {
        const repositoryName = payload.repository.full_name;
        const commitHash = payload.after;

        // Use the GitHub API to fetch the list of files changed in the commit
        const response = await octokit.repos.getCommit({
          owner: payload.repository.owner.name,
          repo: payload.repository.name,
          ref: commitHash
        });

        const filesChanged = response.data.files;
        console.log('Files changed in the push event:', filesChanged);
      }

      if (eventType === 'issue_comment') {
        const commentText = payload.comment.body;
        const pullRequestTitle = payload.issue.title;
        console.log(
          `New comment on pull request "${pullRequestTitle}": ${commentText}`
        );
      }

      if (eventType === 'push') {
        const repositoryName = payload.repository.full_name;
        const commitHash = payload.after;

        // Use the GitHub API to fetch the list of files changed in the commit
        const response = await octokit.repos.getCommit({
          owner: payload.repository.owner.name,
          repo: payload.repository.name,
          ref: commitHash
        });

        const filesChanged = response.data.files;
        console.log('Files changed in the push event:', filesChanged);
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
      console.log('this has entered');
      const event = req.get('X-GitHub-Event');

      const secret = process.env.WEBHOOK_REQUEST_SECRET_MILESTONE;
      const signature = req.headers['x-hub-signature-256'];

      const hmac = crypto.createHmac('sha256', secret);
      const body = JSON.stringify(req.body);
      hmac.update(body);

      const calculatedSignature = `sha256=${hmac.digest('hex')}`;

      if (signature === calculatedSignature) {
        const result = await milestoneGithubHookHelper.saveGithubData(req.body);
        if (result?.error) throw new Error('Github Error');
        else {
          console.log('sending the response');
          res.status(200);
        }
      } else {
        throw new Error('invalid request');
      }
    } catch (error) {
      console.log('Error while savingGithub data : ', error);
      res.status(500).send({ error: ERR.INTERNAL });
    }
  };

  /**
   * It handles the merged pull requests
   * @param req
   * @param res
   */
  private mergePullRequest = async (req: Request, res: Response) => {
    try {
      if (req.body.pr_number) {
        const result = await GithubHookHelper.mergePullRequest(
          req.body.pr_number
        );
        if (result.error) throw new Error();
        else res.status(200).send({ data: result.data });
      } else {
        res.status(500).send({ error: 'pr_number is not specified' });
      }
    } catch (error) {
      res.status(500).send({ error: ERR.INTERNAL });
    }
  };
}

export default MilestoneGithubHookController;
