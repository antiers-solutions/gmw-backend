import { Response } from 'express';
import {
  STATUS_CODES,
  RESPONSE_MESSAGES,
  DATA_MODELS,
  REDIS_VARIABLES
} from '../constants';
import { ESResponse } from '@interfaces';
import axios from 'axios';
import mongoDataHelper from '../helpers/mongo.data.helper';
import redisHelper from '../helpers/redis.helper';
import { v4 } from 'uuid';
import { log } from '../utils/helper.utils';

class UserHelper {
  /**
   * The user sign-in helper handles all the login operations and checks for valid users
   * @param res
   * @param payload
   * @param userAgent
   * @returns
   */
  userSignin = async (
    res: Response,
    payload: {
      access_token: string;
    },
    userAgent: string
  ): Promise<{
    error?: boolean;
    data?: any;
    message?: string;
    status?: number;
    token?: string;
  }> => {
    try {
      const response = await axios.post(
        process.env.GITHUB_VERIFY_ACCESS_TOKEN_URL,
        {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code: payload.access_token,
          redirect_uri: process.env.GITHUB_REDIRECT_URI
        }
      );

      const params = new URLSearchParams(response.data);
      const access_token = params.get('access_token');

      // for checking the github token if it is valid or not
      if (access_token || payload.access_token) {
        const resUser = await this.userSigninData(
          access_token || payload.access_token
        );

        // if id is not present then return
        if (!resUser.id)
          return {
            data: null,
            error: true,
            status: STATUS_CODES.NOTFOUND,
            message: RESPONSE_MESSAGES.USER_NOT_FOUND
          };

        const token = v4();

        const updatedSeconds = Math.floor(Date.now() / 1000) + 60 * 60; // one hour time

        //storing the request user-agent for enhanced security
        const userCheck = await mongoDataHelper.findAndQueryData(
          DATA_MODELS.User,
          {
            id: resUser?.id
          }
        );

        if (userCheck.length > 0) {
          log.green('User Signin');

          // storing the genereated token in redis with an expiry time so that session login can be implemented
          await redisHelper.storeInRedis(
            REDIS_VARIABLES.UserData,
            { [token]: resUser.id },
            updatedSeconds
          );

          // storing the user-agent of the browser from the req so that additional security is added
          await redisHelper.storeInRedis(
            REDIS_VARIABLES.UserAgent,
            { [token]: userAgent },
            updatedSeconds
          );

          return {
            token: token,
            data: {
              name: resUser.name,
              gitId: resUser.git_id,
              image_url: resUser?.image_url
            },
            error: null,
            status: 200
          };
        } else {
          // saving information of the user if the user is not already present in the db
          await mongoDataHelper.savaData(DATA_MODELS.User, {
            id: resUser?.id,
            git_id: resUser?.git_id,
            name: resUser?.name,
            git_url: resUser?.git_url,
            image_url: resUser?.image_url,
            site_admin: resUser?.site_admin,
            role: null
          });

          // storing the genereated token in redis with an expiry time so that session login can be implemented
          await redisHelper.storeInRedis(
            REDIS_VARIABLES.UserData,
            { [token]: resUser.id },
            updatedSeconds
          );

          // storing the user-agent of the browser from the req so that additional security is added
          await redisHelper.storeInRedis(
            REDIS_VARIABLES.UserAgent,
            { [token]: userAgent },
            updatedSeconds
          );
          return {
            token: token,
            data: {
              name: resUser.name,
              gitId: resUser.git_id,
              image_url: resUser?.image_url
            },
            error: null,
            status: 200
          };
        }
      }
    } catch (err) {
      return {
        error: true,
        data: { isLogin: false },
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };

  /**
   * helper returns us the git token and information about the user
   * @param access_token
   * @returns
   */
  private userSigninData = async (access_token: string) => {
    try {
      const response = await axios.get(process.env.GIT_USER_DETAILS_URL, {
        headers: {
          Authorization: `token ${access_token}`
        }
      });

      return {
        id: response.data?.id,
        git_id: response.data?.login,
        name: response.data?.name,
        git_url: response.data?.url,
        image_url: response.data?.avatar_url,
        site_admin: response.data?.site_admin
      };
    } catch (error) {
      return {
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };

  /**
   * helper gets user data from the database
   * @param id
   * @returns
   */
  public userData = async (id: string): Promise<ESResponse> => {
    try {
      // return the user from the db based on its id.
      const userCheck = await mongoDataHelper.findAndQueryData(
        DATA_MODELS.User,
        {
          id: id
        }
      );

      return { data: userCheck, error: false };
    } catch (error) {
      return {
        data: null,
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };

  /**
   * helper handles the logout
   * @param token
   * @returns
   */
  public userLogout = async (token: string): Promise<ESResponse> => {
    try {
      // this reomves the token from the redis hence preventing the re-login
      await redisHelper.removeFromRedis(REDIS_VARIABLES.UserData, token);
      await redisHelper.removeFromRedis(REDIS_VARIABLES.UserAgent, token);
      return { message: '', error: false, data: null };
    } catch (error) {
      return {
        error: true,
        status: STATUS_CODES.INTERNALSERVER,
        message: RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR
      };
    }
  };
}

export default new UserHelper();
