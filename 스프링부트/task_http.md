```http
# PROJECT
### PROJECT CREATE
POST /project-api/projects HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "accountId": "testAccountId",
    "projectName": "testProjectName"
}

### PROJECT UPDATE
PUT /project-api/projects/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "accountId": "testAccountId",
    "projectName": "testProjectName"
}

### PROJECT DELETE
DELETE /project-api/projects/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

### PROJECT READ
GET /project-api/projects/1
Host: localhost:8080
Content-Type: application/json

### PROJECT READ ALL
GET /project-api/projects HTTP/1.1
Host: localhost:8080
Content-Type: application/json

# PROJECT_ACCOUNT
### CREATE PROJECT_ACCOUNT

POST /project-api/projects/1/accounts HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "accountId": "testAccountId",
    "authorityCode": "0001"
}

### UPDATE PROJECT_ACCOUNT
PUT /project-api/projects/1/accounts/testAccountId HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "authorityCode": "0002"
}
### DELETE PROJECT_ACCOUNT

DELETE /project-api/projects/1/accounts/testAccountId HTTP/1.1
Host: localhost:8080
Content-Type: application/json

### GET PROJECT_ACCOUNT
GET /project-api/projects/1/accounts/testAccountId HTTP/1.1
Host: localhost:8080
Content-Type: application/json


### GET PROJECT_ACCOUNT ALL
GET /project-api/projects/1/accounts HTTP/1.1
Host: localhost:8080
Content-Type: application/json


# MILESTONE

### CREATE MILESTONE

POST /project-api/projects/1/milestones HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "name":"name",
    "startDate":"2023-06-10",
    "endDate":"2023-06-13"

}

### UPDATE MILESTONE
PUT /project-api/projects/1/milestones/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "name":"name",
    "startDate":"2023-06-10",
    "endDate":"2023-06-13"
}
### DELETE MILESTONE
DELETE /project-api/projects/1/milestones/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

### GET MILESTONE
GET /project-api/projects/1/milestones/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

### GET MILESTONE ALL

GET /project-api/projects/1/milestones HTTP/1.1
Host: localhost:8080
Content-Type: application/json

# TAG

### CREATE TAG
POST /project-api/projects/1/tags HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "name":"name"
}

### UPDATE TAG
PUT /project-api/projects/1/tags/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "name":"name"
}
### DELETE TAG
DELETE /project-api/projects/1/tags/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

### GET TAG
GET /project-api/projects/1/tags/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

### GET TAG ALL

GET /project-api/projects/1/tags HTTP/1.1
Host: localhost:8080
Content-Type: application/json


# TASK

### CREATE TASK
POST /project-api/projects/1/tasks HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "taskName" : "taskName",
    "projectId" : 1,
    "writerId" : "testAccountId",
    "milestoneId" : 1
}

### UPDATE TASK
PUT /project-api/projects/1/tasks/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "taskName" : "taskName",
    "projectId" : 1,
    "writerId" : "testAccountId",
    "milestoneId" : 1
}
### DELETE TASK
DELETE /project-api/projects/1/tasks/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

### GET TASK
GET /project-api/projects/1/tasks/1 HTTP/1.1
Host: localhost:8080
Content-Type: application/json

### GET TASK ALL
GET /project-api/projects/1/tasks HTTP/1.1
Host: localhost:8080
Content-Type: application/json


```
