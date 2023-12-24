
# Project Manager App

The goal of this app is to track employees, projects and tasks. It provides statistics and summary of colleagues working together the longest on a project and the respective duration.

 **NOTE**: 
 Being part of Sirma Academy and successfully reaching the final stage for both paths: Java and JavaScript, I challenged myself to build a "Full Stack" project. Some of the requirements are fulfilled on the front-end, some on the back-end and some on both sides.

[Project Manager - Back End Link](https://github.com/Ivan-S-Petkov/Project-Manager-BE)

The project has been deployed: [Live link](https://project-manager-6ccf3.web.app/)

## Description

The user is able to perform the following operations for:

Employee:
 - add: required fields - name and department
 - edit
 - search: by name or department
 - filter: by department

Project:
 - add: required fields - name and description
 - edit
 - search: by name or description

Task:
 - assign project to an employee, specify time frame
 - search: by emplyee and project name
 - delete

Mass Data Upload:
 - upload CSV file with multiple records


## Validations

 Employee - name and department should be between 2 and 20 characters.

 Project - name should be between 2 and 20 character, description should be between 10 and 200 symbols.

 Task - project and employee are selected from dropdown list. BE would validate if they exist in the DB. Start Date should not be in the future. End date should not be in the future. Start Date should be before End Date. BE would validate if the employee is already working on this project for the specified time frame. Start and End Date could be in any format except whereas the date starts with month or day digits (leaving year digits last) regardless of the separator. End Date could be left empty. If so it is considered as ongoing.

 Mass Data Upload - validates if there is a file loaded and if it is the correct .csv file format. Checks if project and employee IDs are numbers. BE would validate if they exist in the DB. Start Date and End Date validations are the same as per adding single task (above). End Date could be entered as "null". BE would perform an additional check if the employee has already been working on this task for the specified time frame.


## Tech Stack

**Client:** React, Styled-Components

**Server:** Spring, Postgres

## Implementations

API Calls - Axios

Styling - Styled-Components

Routing - React Router Dom

Date Formatting - Moment

Enviorment Variables - Env-cmd

Context - implemented global error variable. It could be used for notifications as well

Custom Hooks - implemented custom hooks to separate the business logic from components especially in a lengthy components

Utils - CSV Reader and Validations


### Additional explanations regarding the business logic 
1. CSV Util is responsible for reading the data from the CSV file. Once the data is checked ONLY the valid records are sent as JSON to the server.

2. BE supports endpoint: `api/statistics`. It returns all pairs of colleagues working at the same time on the same project and the duration. 
``` JSON
[
    {
        "project": {
            "id": 1,
            "name": "JavaScript Basics",
            "description": "Introduction to variables, scopes conditions, loops, functions and classes."
        },
        "employeeOne": {
            "id": 1,
            "name": "Ivan Petkov",
            "department": "Front End"
        },
        "employeeTwo": {
            "id": 2,
            "name": "Alen Paunov",
            "department": "Full Stack"
        },
        "duration": 2
    },
    ...
    ...
    ...
    {
        "project": {
            "id": 2,
            "name": "Java Basics",
            "description": "Fundamentals to conditions, loops, classes and methods."
        },
        "employeeOne": {
            "id": 2,
            "name": "Alen Paunov",
            "department": "Full Stack"
        },
        "employeeTwo": {
            "id": 1,
            "name": "Ivan Petkov",
            "department": "Front End"
        },
        "duration": 2
    }
] 
```

FE is responsible to finding the MAX duration and identifies the respective project(s) and pair(s). For more details about the algorithm of creating those pairs please follow the [Project Manager - Back End Link](https://github.com/Ivan-S-Petkov/Project-Manager-BE). 


## Run Locally

Clone the project:

```bash
  git clone https://github.com/Ivan-S-Petkov/Project-Manager-FE
```

Go to the project directory:

```bash
  cd my-project
```

Install dependencies:

```bash
  npm install
```

Start using local BE server: 

```bash
  npm run start
```

OR

Start using local BE remote server:

```bash
  npm run start:prod
```


## Final Words

The project has been deployed - [Live link](https://project-manager-6ccf3.web.app/)

https://firebase.google.com/ - hosting the front end

https://www.docker.com/ - creating and hosting Docker image

https://render.com/ - creating a web service consuming the Docker image

https://neon.tech/ - serverless postgres

Footer - I hope you enjoyed the footer :) It represents a simple process flow of: 

### Inspiration &rarr; Learn &rarr; Develop

