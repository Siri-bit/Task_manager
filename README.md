# Task Manager

Task Manager is a full-stack web application that allows users to securely register, log in, and manage their personal tasks. The application uses JWT-based authentication to protect user-specific data and demonstrates a complete Angular + Node.js + MongoDB workflow.

## Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas account
- Angular CLI

## Features
- User registration and login (JWT-based authentication)
- Create, read, update, and delete tasks
- Tasks are scoped per user (each user only sees their own tasks)
- Responsive Bootstrap-based UI
- JWT Authentication
- Secure password hashing using bcrypt

## Tech Stack
- **Frontend**: Angular, TypeScript
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB Atlas
- **Auth**: JWT (JSON Web Tokens), bcrypt for password hashing

## Setup Instructions

### Backend
1. `cd backend`
2. `npm install`
3. Create a `.env` file with:
   ```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
JWT_SECRET=<your_secret_key>
```

## Project Structure
Task_manager/
├── backend/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── angular.json
│ └── package.json
│
└── README.md

## API Endpoints

Authentication

POST /api/auth/register
POST /api/auth/login

Tasks

GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

5. `node server.js`

### Frontend
1. `cd frontend`
2. `npm install`
3. `ng serve`
4. Visit `http://localhost:4200`

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Live Demo
- Backend: https://task-manager-backend-fkoh.onrender.com
- Frontend: https://task-manager-541z9uyac-sirishas-projects-45e28e4f.vercel.app

## AI Tools Used
- **ChatGPT** — used for scaffolding the Angular frontend (components, 
  services, routing structure)
- **Claude** — used for backend architecture guidance (Express routes, 
  JWT middleware design, MongoDB Atlas setup) and debugging deployment 
  configuration issues

## Where AI Helped
- Generating Angular component/service boilerplate (new syntax for me)
- Structuring the JWT authentication middleware pattern
- Debugging environment/connection issues during MongoDB Atlas setup 
  (DNS resolution errors on certain networks) and production API URL 
  configuration during deployment

## What I Implemented Myself
- Overall API design: route structure, which fields belong on which model, 
  and how user-task ownership is enforced (every task query is scoped to 
  `req.user.id` from the decoded JWT)
- Understood and validated the full auth flow: password hashing with 
  bcrypt, JWT signing/verification, and protecting routes with middleware
- Debugged and fixed API URL mismatches between local development and 
  the deployed backend (multiple iterations visible in commit history)
- ## What I Implemented Myself

- Designed the task dashboard layout and responsive UI.
- Implemented Angular routing between Login, Register, and Dashboard.
- Integrated JWT authentication with Angular services.
- Connected the Angular frontend with the deployed Express backend.
- Implemented CRUD operations with automatic UI refresh after every action.
- Added task statistics (Total, Completed, Pending).
- Styled the application using Bootstrap and custom CSS for a modern user experience.

## Challenges Faced
- MongoDB Atlas connection failures due to DNS (SRV record) restrictions 
  on certain networks — resolved by switching to the non-SRV connection 
  string format
- Mismatched API URLs between local (`localhost:5000`) and production 
  (Render) environments after deployment, requiring several rounds of 
  fixes to the frontend's service files


## If I Had More Time
- Add environment-based config (e.g., `environment.ts` in Angular) instead 
  of hardcoding API URLs, to avoid the production URL bugs I hit
- Add pagination and tag-based filtering in the UI
- Add automated tests for the API routes
- Deploy the frontend properly with a custom domain
## License

This project is developed as part of the Binaried AI Full Stack Developer Internship assignment.


## Author
Sirisha VL — [GitHub](https://github.com/Siri-bit)
