import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { Controller } from './interfaces';
import { Response, Request } from 'express';
import { Server } from 'http';
import sendResponse from './responses/response.helper';
import { RESPONSE_MESSAGES, STATUS_CODES } from './constants';
import { log } from './utils/helper.utils';

class App {
  public app: express.Application;
  public req: express.Request;
  public res: express.Response;
  public next: express.NextFunction;
  private server: Server = null;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  /**
   * bind the port and start listning for requests
   */
  public listen = () => {
    this.server = this.app.listen(process.env.PORT || 7200, () => {
      log.log('Api is up and listning on port ', process.env.PORT || 7200);
    });
  };

  /**
   * only return the http server after binding the port and start listning for requests
   * if you try to call without calling listen then it return default null value as server
   * @returns http server instance
   */
  public getServer = (): Server => {
    return this.server;
  };

  private initializeMiddlewares = () => {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  };

  private initializeControllers = (controllers: Controller[]) => {
    // Check api status
    this.app.get('/', (req: Request, res: Response) =>
      sendResponse(res, { message: 'API Service is up' })
    );

    // Setup the controllers
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });

    // Unknown routes handler
    this.app.all('*', (req: Request, res: Response) =>
      sendResponse(res, {
        status: STATUS_CODES.NOTFOUND,
        message: RESPONSE_MESSAGES.ROUTE_404
      })
    );
  };
}

export default App;
