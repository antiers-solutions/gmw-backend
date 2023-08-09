import * as express from 'express';
import { ERR } from '../constants';
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
    this.router.post(`${this.path}/save-pull-merge-data`, this.getGithubData);
    this.router.post(`${this.path}/merge-pull-request`, this.mergePullRequest);
  }

  private getGithubData = async (req: Request, res: Response) => {
    try {
      const result = await GithubHookHelper.getGithubData(req.body);
      if (result?.error) throw new Error('Github Error');
      else res.status(200).send({ data: result?.data });
    } catch (error) {
      res.status(500).send({ error: ERR.INTERNAL });
    }
  };

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
