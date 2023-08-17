import * as express from 'express';
import { ERR } from '../constants';
import crypto from 'crypto';
import { Controller } from '../interfaces';
import { Request, Response } from 'express';
import GithubHookHelper from '../controller-helpers/githubHook.helper';

class GithubHookController implements Controller {
  public path = '/github';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/save-pull-merge-data`, this.saveGithubData);
    this.router.post(`${this.path}/merge-pull-request`, this.mergePullRequest);
  }

  /**
   * It gets the github data of pull and merge request
   * @param req
   * @param res
   */
  private saveGithubData = async (req: Request, res: Response) => {
    try {
      const secret = process.env.WEBHOOK_REQUEST_SECRET;
      const signature = req.headers['x-hub-signature-256'];

      const hmac = crypto.createHmac('sha256', secret);
      const body = JSON.stringify(req.body);
      hmac.update(body);

      const calculatedSignature = `sha256=${hmac.digest('hex')}`;

      if (signature === calculatedSignature) {
        const result = await GithubHookHelper.saveGithubData(req.body);
        if (result?.error) throw new Error('Github Error');
        else res.status(200);
      } else {
        throw new Error('invalid request');
      }
    } catch (error) {
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

export default GithubHookController;
