// DB data models
export const DATA_MODELS = {
  User: 'User',
  Team: 'Team',
  Proposal: 'Proposal',
  Project: 'Project',
  Milestone: 'Milestone',
  MilestoneProposal: 'MilestoneProposal'
};

export const PROJECT_STATUS = {
  Active: 'active',
  Complete: 'complete'
};

export const PAGE_LIMIT = 100;
export const GRANT_REPO_PATH = '/repos/w3f/Grants-Program';
export const PULLS = '/pulls';

export const ORDERS = {
  DESC: 'desc',
  ASEC: 'asec'
};

export const USED_STRINGS = {
  TEAM_MEMBERS: 'Team members',
  CONTACT: 'Contact',
  TEAM_WEBSITE: 'Team Website',
  MILESTONE: 'Milestone',
  ESTIMATED_DURATION: 'estimated duration',
  FTE: 'fte',
  COSTS: 'costs',
  COST: 'cost',
  PROJECT_NAME: 'project name',
  LEVEL: 'level',
  TEAM_NAME: 'team name',
  PROPOSER: 'proposer',
  TOTAL_COSTS: 'total costs',
  TOTAL_COST: 'total cost',
  USD: 'usd',
  BTC: 'btc',
  PAYMENT_ADDRESS: 'payment address',
  TOTAL_ESTIMATED_DURATION: 'total estimated duration',
  REGISTERED: 'registered',
  ADDRESS: 'address',
  LEGAL_ENTITY: 'legal entity'
};

export const LEVELS = { L1: '1', L2: '2', L3: '3' };
export const BUDGETS = { L1: 10000, L2: 5000 };

export const HTTP_METHODS = {
  GET: 'GET'
};

export const BRANCHS = {
  MASTER: 'master'
};

export const PULL_REQUEST_TYPE = {
  CLOSED: 'closed',
  OPEN: 'open'
};

// Enviroments
export const ENVIROMENTS = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  QA: 'qa',
  TEST: 'test',
  STAGE: 'stage'
};

export const STATUS = {
  OPEN: 'open',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  INREVIEW: 'in-review',
  COMPLETE: 'complete'
};

export const REDIS_VARIABLES = {
  UserData: 'UserData',
  UserAgent: 'UserAgent'
};

// Error messages for api
export const ERR = {
  INTERNAL: 'Internal server error'
};

// Status codes
export const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NOCONTENT: 204,
  BADREQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  TIMEOUT: 408,
  TOOMANYREQ: 429,
  INTERNALSERVER: 500,
  BADGATEWAYS: 502,
  SERVICEUNAVILABLE: 503,
  GATEWAYTIMEOUT: 504,
  UNPROCESSABLE: 422
};

//Sorting basis
export const SORT_NAME = {
  PROJECT_NAME: 'name',
  Date: 'date'
};

// Response messages
export const RESPONSE_MESSAGES = {
  INTERNAL_SERVER_ERROR: 'Internal Server Error.',
  NOT_FOUND: 'Not Found!',
  USER_NOT_FOUND: 'User not found!',
  UPDATED_SUCCESS: 'Updated Successfully.',
  NOT_VALID_QUERY: 'Query is not Valid!',
  INVALID_ID: 'Id is not valid!',
  INVALID_NAME: 'Name is not valid',
  UNAUTHORIZED: 'Unauthorized!',
  ROUTE_404: 'Route not found.',
  Max_LIMIT: 'Invalid page limit (defaults to 10, maximum is 40)'
};

// Error messages
export const ERROR_MESSAGES = {
  ERROR_WHILE_EXTRACTING_PULL_REQUEST_DATA:
    'Something went wrong while extracting the pull request data',
  ERROR_WHILE_READING_DATA_FROM_FILE:
    'Error while reading grant data from json file',
  ERROR_WHILE_SAVING_DATA_FROM_FILE:
    'Error while saving grant data from json file',
  ERROR_WHILE_PARSING_METADATA_FILE: 'Error while parsing the metadata files'
};

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
