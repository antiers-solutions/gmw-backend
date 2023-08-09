import { Controller } from '../interfaces';
import * as express from 'express';
import { Request, Response } from 'express';
import UserHelper from '../controller-helpers/user.helper';
import { userValidation } from '../validation/user.validation';
import userHelper from '../controller-helpers/user.helper';
import sendResponse from '../responses/response.helper';

class UserController implements Controller {
  public path = '/user';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.router.post(`${this.path}/signup`, userValidation, this.userSignUp);
    this.router.delete(`${this.path}/logout`, this.userLogout);
  };

  // controller is user login and sigup handler, after getting its response from its helper function
  private userSignUp = async (req: Request, res: Response) => {
    const userSign = await UserHelper.userSignin(
      res,
      req.body,
      req.headers['user-agent']
    );

    // set access token cookie
    res.cookie('token', userSign?.token, {
      path: '/',
      httpOnly: true
    });

    return sendResponse(res, userSign);
  };

  // controller handles the user logout
  private userLogout = async (req: Request, res: Response) => {
    const token = req.cookies.token;

    const check = await userHelper.userLogout(token);
    return sendResponse(res, check);
  };
}

export default UserController;
