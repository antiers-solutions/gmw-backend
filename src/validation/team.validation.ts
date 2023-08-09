import * as express from 'express';

export const teamValidation = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  next();
};
