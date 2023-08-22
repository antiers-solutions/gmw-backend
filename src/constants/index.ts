// DB data models
export const DATA_MODELS = {
  User: 'User',
  Team: 'Team',
  Proposal: 'Proposal',
  Project: 'Project',
  Milestone: 'Milestone'
};

export const STATUS = {
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
    'Something went wrong while extracting the closed pull request data',
  ERROR_WHILE_READING_DATA_FROM_FILE:
    'Error while reading grant data from json file',
  ERROR_WHILE_SAVING_DATA_FROM_FILE:
    'Error while saving grant data from json file'
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
