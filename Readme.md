# Job Application Tracker
## Introduction
This is a job application tracker API built using TypeScript, Node.js, and MongoDB. It allows users to create, view, update, and delete job applications.

## Features
- Create job applications
- View job applications
- Update job applications
- Delete job applications

## Technologies Used
- TypeScript
- Node.js
- MongoDB
- Monggose

## Installation

1. Clone this Respository

```bash

https://github.com/dprakash2101/job_application_tracker.git
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file in the root directory of the project and add the following environment variables:

```bash
PORT=9000
MONGODB_URI=mongodb://localhost:27017/jobApplicationsDB
```

4. Start the Application

```bash
npm start
```

### Usage
The API endpoints are available at the following URLs:
```bash
/api/job-applications: Get all job applications
/api/job-applications/:id: Get a specific job application by ID
/api/job-applications: Create a new job application
/api/job-applications/:id: Update a job application
/api/job-applications/:id: Delete a job application
```

### Example Curl
```bash
// Create a new job application
curl -X POST http://localhost:9000/api/job-applications -H "Content-Type: application/json" -d '{
  "roleName": "Software Engineer",
  "companyName": "Google",
  "jobLocation": "Mountain View, CA",
  "jobType": "Full-time",
  "jobDescription": "Develop and maintain software applications",
  "knownJobThrough": "LinkedIn",
  "appliedOn": "2023-10-26",
  "emailUsed": "johndoe@example.com",
  "status": true,
  "statusReason": "Applied online",
  "note": "Submitted resume and cover letter"
}'

// Get all job applications
curl http://localhost:9000/api/job-applications

// Get a specific job application by ID
curl http://localhost:9000/api/job-applications/635b89a74242424242424242

// Update a job application
curl -X PUT http://localhost:9000/api/job-applications/635b89a74242424242424242 -H "Content-Type: application/json" -d '{
  "status": false,
  "statusReason": "Rejected"
}'

// Delete a job application
curl -X DELETE http://localhost:9000/api/job-applications/635b89a74242424242424242
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Author

[Devi Prakash Kandikonda](https://github.com/dprakash2101)