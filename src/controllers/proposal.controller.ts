import { Controller } from '@interfaces';
import express from 'express';

class ProposalContoller implements Controller {
  path = '/proposal';
  router = express.Router();

  constructor() {
    this.initRoutes();
  }

  /**
   * initialize the routes
   */
  initRoutes = () => {
    // pending
  };
}

export default ProposalContoller;
