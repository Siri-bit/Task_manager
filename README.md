# Task Manager

A full-stack task management app with authentication, built with Angular, 
Node.js/Express, and MongoDB.

## Features
- User registration and login (JWT-based authentication)
- Create, read, update, and delete tasks
- Tasks are scoped per user (each user only sees their own tasks)
- Responsive UI

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

4. 4. `node server.js`

### Frontend
1. `cd frontend`
2. `npm install`
3. `ng serve`
4. Visit `http://localhost:4200`

## Live Demo
- Backend: https://task-manager-backend-fkoh.onrender.com
- Frontend: 

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
- [Add: whatever you personally decided/fixed in the frontend, e.g., 
  "which fields to show in the task form", "styling decisions", etc.]

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


## Author
Sirisha VL — [GitHub](https://github.com/Siri-bit)
