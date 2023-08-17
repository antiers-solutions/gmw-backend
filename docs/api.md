# API Reference

### This file contains documentation for the following API endpoints
- api/graph
- api/project
- api/team
- api/dynamic-cards
- api/user
- api/milestone

#### The api/graphs endpoint is freely available to all users without requiring any login. This approach is taken because the endpoint serves as a GET API specifically intended to provide the data necessary for the landing page. 

## Landing Page API

### 1. Get number of projects per each status

```
api/graph/get-projects-count-by-status
```
#### GET
#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `active`      | `number` | count of projects that have the status “active” |
| `hold`      | `number` | count of projects that have the status “hold” |
| `complete`      | `number` | count of projects that have the status “complete” |

### 2. Get number of projects per each level

```
api/graph/get-projects-count-by-level
```
#### GET
#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `level1`      | `number` | count of projects at level1 |
| `level2`      | `number` | count of projects at level2 |
| `level3`      | `number` | count of projects at level3 |

### 3. Get number of applications accepted/rejected (month-wise)

```
api/graph/get-rejected-accepted-projects-year
```
#### GET
#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `month`      | `string` | name of month |
| `accepted`      | `number` | count of accepted applications |
| `rejected`      | `number` | count of rejected applications |

## Milestones Data API

### 1. Get the milestone data for project ID

```
api/milestones/get-by-projectId/:projectId
```
#### GET
#### Request Params
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `projectId`      | `string` | ID of project |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | ID of milestone |
| `file_name`      | `string` | Name of the delivery MD file |
| `project_id`      | `string` | ID of project |
| `project_md_link`      | `string` | link to the project MD file |
| `status`      | `string` | current status of project |
| `cost`      | `string` | cost of the project |
| `milestoneNo`      | `number` | Number of current milestone |
| `merged_at`      | `string` | Date when this milestone was merged |

## Project Data API
get data for projects

### 1. Get all projects

```
api/project/get-all
```

#### GET

#### Request qureyParams
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pageLimit` | `number` | number of projects to be displayed on one page |
| `pageNo` | `number` | Index of current page |

#### Response 
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | Id of of the project |
| `start_date`      | `date` | date when the project was started (application was accepted) |
| `project_name`      | `string` | name of project |
| `status`      | `string` | status of projects |
| `total_cost`      | `{ amount: string; currency: string }` | billing information of the project as a whole (amount and denom) |
| `total_duration`      | `string` | estimated time for the project to be completed |
| `team_id`      | `string` | Id of of the team working on this project |
| `level`      | `string` | level of project |
| `milestones`      | `string` | ndex of the current milestones in the project |
| `totalMilestones`      | `string` | total number of milestones in this project |
| `totalCount`      | `string` | length of the array of data |

### 2. Get project by id

```
api/project/get-by-id/:projectId
```
#### GET
#### Request Params
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `projectId`      | `string` | **Required**. id of the project to be searched |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | id of of the project |
| `user_github_id`     | `string` | id of the user who first submitted the application for a grant |
| `file_name`      | `string` | name of the project MD file (from the github repo) |
| `start_date`      | `date` | date when the project was started (application was accepted) |
| `payment_details`      | `string` | payment address of the team mentioned in the project MD file |
| `md_content`      | `string` | content of the project MD file |
| `md_link`      | `string` | link used to download the RAW MD file contents from github |
| `html_url`      | `string` | this link will redirect the user to the page on github that displays all the contents of the MD file |
| `project_name`      | `string` | name of project |
| `status`      | `string` | status of projects |
| `total_cost`      | `{ amount: string; currency: string }` | billing information of the project as a whole (amount and denom) |
| `total_duration`      | `string` | estimated time for the project to be completed |
| `team_id`      | `string` | Id of of the team working on this project |
| `level`      | `string` | level of project |
| `legal_structure`      | `{ registered_address: string, registered_legal_entity: string }` | the address and legal entity of the team working on this project |
| `milestones`      | `string` | ndex of the current milestones in the project |
| `totalMilestones`      | `string` | total number of milestones in this project |



### 3.  Get groject by name

```
api/project/search-by-name
```
#### GET
#### Request queryParams
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `searchedName` | `string` | **Required**. Name of the project |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | id of of the project |
| `start_date`      | `date` | date when the project was started (application was accepted) |
| `payment_details`      | `string` | payment address of the team mentioned in the project MD file |
| `html_url`      | `string` | this link will redirect the user to the page on github that displays all the contents of the MD file |
| `project_name`      | `string` | name of project |
| `status`      | `string` | status of projects |
| `total_cost`      | `{ amount: string; currency: string }` | billing information of the project as a whole (amount and denom) |
| `total_duration`      | `string` | estimated time for the project to be completed |
| `team_id`      | `string` | Id of of the team working on this project |
| `level`      | `string` | level of project |
| `milestones`      | `string` | ndex of the current milestones in the project |
| `totalMilestones`      | `string` | total number of milestones in this project |
| `file_name`      | `string` | name of the MD file of the project |

### 4. Get filtered data for projects by their level/status

```
api/project/filter
```
#### GET

#### Request queryParams 
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pageLimit`      | `number` | number of projects to be displayed on one page |
| `pageNo`      | `number` | index of the current page |
| `level`      | `string` | level criteria for filtering projects |
| `status`      | `string` | status critera for filtering projects |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | id of of the project |
| `start_date`      | `date` | date when the project was started (application was accepted) |
| `project_name`      | `string` | name of project |
| `status`      | `string` | status of projects |
| `total_cost`      | `{ amount: string; currency: string }` | billing information of the project as a whole (amount and denom) |
| `total_duration`      | `string` | estimated time for the project to be completed |
| `team_id`      | `string` | Id of of the team working on this project |
| `level`      | `string` | level of project |
| `milestones`      | `string` | ndex of the current milestones in the project |
| `totalMilestones`      | `string` | total number of milestones in this project |

### 5. Update a project's status

```
api/project/update-status
```
#### PUT

#### Request Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `updatedStatus`      | `string` | **Required**. the new status of the project |
| `id`      | `string` | **Required**. the id of the project |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `status`      | `string` | "success" is returned |

## Teams Data API
Get data for teams

### 1. Get list of all teams

```
api/teams/get-all
```
#### GET

#### Request Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pageLimit` | `number` | number of projects to be displayed on one page |
| `pageNo` | `number` | Index of current page |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `totalCount`      | `number` | total number of teams |
| `id`      | `string` | id of team |
| `name`      | `string` | name of team |
| `projects`      | `[{ projectId : string, status : string }]` | array containing all the projectIds and their respective status for this team |

### 2. Get data of a team by it's id

```
api/teams/get-by-id/:teamId
```
#### GET

#### Request Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `teamId` | `string` | id of the team to be searched |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `team data` |  |  |
| `id`      | `string` | id of team |
| `name`      | `string` | name of team |
| `projects`      | `[{ projectId : string, status : string }]` | array containing all the projectIds and their respective status for this team |
| `project data` |  |  |
| `id`      | `string` | id of of the project |
| `start_date`      | `date` | date when the project was started (application was accepted) |
| `project_name`      | `string` | name of project |
| `status`      | `string` | status of projects |
| `total_cost`      | `{ amount: string; currency: string }` | billing information of the project as a whole (amount and denom) |
| `total_duration`      | `string` | estimated time for the project to be completed |
| `team_id`      | `string` | Id of of the team working on this project |
| `level`      | `string` | level of project |
| `milestones`      | `string` | ndex of the current milestones in the project |
| `totalMilestones`      | `string` | total number of milestones in this project |

### 3. Get data of teams by it's name

```
api/teams/search-by-name
```
#### GET

#### Request Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `searchedName` | `string` | number of team to be searched |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `totalCount`      | `number` | total number of teams |
| `id`      | `string` | id of team |
| `name`      | `string` | name of team |
| `projects`      | `[{ projectId : string, status : string }]` | array containing all the projectIds and their respective status for this team |

### 4. Merge data of selected teams under one name

```
api/team/merge-team
```
#### PUT

#### Request Body
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `updatedName` | `string` | new name of the selected teams |
| `teamIds` | `[string]` | array of team ids to be merged |

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `newTeamId`      | `string` | id of the new team |

## User Login API

### 1. Sign in to github and for login session and security using user-agent

```
api/user/signup
```
#### POST

#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | name of the github user who logged in |
| `gitId`      | `string` | username of the github user who logged in |
| `image_url`      | `string` | url to the profile picture of the github user who logged in |

### 2. Log out user out of session

```
api/user/logout
```
#### DELETE

#### Request Cookies Param
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | name of the github user who logged in |


#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `data`      | `null` | "null" is returned upon successful logout |

## Dynamic Cards API

### 1. Get data for cards on front-end

```
api/dynamic-cards
```
#### GET
#### Response
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `totalProposals`      | `number` | all applications in the grants program |
| `totalProjects`      | `number` | all applications that were accepted |
| `totalRejectedProposals`      | `number` | all applications that were rejected |
| `totalCompletedProjects`      | `number` | all projects that were completed |

## Webhook API integration
This API will listen to the events triggered by github: 
#### POST
```
api/github/save-pull-merge-data
```