# Environment Variable Set Up Guide

This document provides description, defaults and possible values for all environment variables that take a part in app configuration

### General configuration
| Env name | Default value | Possible values | Description |
| ---------- | ------ |-------------------------|---------------------------------- |
| `PORT` | 7001 | any port number| The port number on which your application will listen |
| `DBNAME` | myappdb | any string value | The name of the database you'll be using |
| `REDIS_URL` | redis://localhost:6379 | any string value | The connection URL for your Redis server. |
| `MONGO_URI` | mongodb://localhost:27017 | any string value | The connection URI for your MongoDB database |

### Github configurations
| Env name | Default value | Possible values | Description |
| ---------- | ------ |-------------------------|---------------------------------- |
| `GITHUB_CLIENT_ID` | - | provided by github | The client ID for your GitHub OAuth application. To get this, first [register an OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app#registering-your-app). |
| `GITHUB_CLIENT_SECRET` | - | provided by github | The client secret for your GitHub OAuth application. Can be found in settings once and OAuth app is registered. |
| `GITHUB_REDIRECT_URI` | - | provided by github | The redirect URI for your GitHub OAuth application. This [Guide](https://docs.github.com/en/apps/oauth-apps/maintaining-oauth-apps/modifying-an-oauth-app) will help you in locating this in your OAuth app settings. |
| `APPLICATIONS_REPO` | /repos/w3f/Grants-Program/contents/applications | link to the application folder of any grants repo | URL to the folder containing application MD files |
| `DELIVERIES_REPO` | /repos/w3f/Grant-Milestone-Delivery/contents/deliveries | link to the deliveries folder of any grants repo | URL to the folder containing delivery MD files |
| `GITHUB_PULL_REQUEST_URL` | https://github.com/w3f/Grants-Program | link to the any grants repo | URL for getting data for Pull Requests |
| `GIT_USER_DETAILS_URL` | https://api.github.com/user | - | URL for getting user details |
| `GITHUB_ACCESS_TOKEN_CLASSIC` | - | any valid github Personal Access Token | Access token for GitHub API |
| `GITHUB_VERIFY_ACCESS_TOKEN_URL` | https://github.com/login/oauth/access_token | - | URL to check the validity of the access token |
| `WEBHOOK_REQUEST_SECRET` | - | any secret phrase you want to pass | The secret phrase for Github webhook authorisation. This [guide](https://docs.github.com/en/webhooks-and-events/webhooks/securing-your-webhooks#setting-your-secret-token) will help you in setting your secret |