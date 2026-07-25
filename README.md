# Task Manager

Task Manager is a full-stack web application that allows users to securely register, log in, and manage their personal tasks. The application uses JWT-based authentication to protect user-specific data and demonstrates a complete Angular + Node.js + MongoDB workflow.

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://task-manager-541z9uyac-sirishas-projects-45e28e4f.vercel.app
- **Backend (Render):** https://task-manager-backend-fkoh.onrender.com

---

## 📌 Features

- User Registration & Login (JWT Authentication)
- Secure Password Hashing using bcrypt
- Create, Read, Update and Delete Tasks
- User-specific Tasks (Each user can only access their own tasks)
- Responsive Bootstrap-based UI
- RESTful API
- MongoDB Atlas Database Integration

---

## 🛠 Tech Stack

### Frontend
- Angular
- TypeScript
- Bootstrap

### Backend
- Node.js
- Express.js
- Mongoose

### Database
- MongoDB Atlas

### Authentication
- JWT (JSON Web Tokens)
- bcrypt

---

## 📋 Prerequisites

Before running the project locally, ensure you have:

- Node.js (v18 or above)
- npm
- Angular CLI
- MongoDB Atlas Account

---

# ⚙️ Setup Instructions

## Backend

```bash
cd backend
npm install
```

Create a **.env** file inside the backend folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
JWT_SECRET=<your_secret_key>
```

Start the backend:

```bash
node server.js
```

---

## Frontend

```bash
cd frontend
npm install
ng serve
```

Open:

```
http://localhost:4200
```

---

# 📁 Project Structure

```text
Task_manager/
│
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── environments/
│   ├── angular.json
│   └── package.json
│
└── README.md
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |

## Tasks

| Method | Endpoint |
|---------|----------|
| GET | `/api/tasks` |
| POST | `/api/tasks` |
| PUT | `/api/tasks/:id` |
| DELETE | `/api/tasks/:id` |

---

# 🌐 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

# 🤖 AI Tools Used

### ChatGPT
Used for:
- Angular component and service scaffolding
- Routing guidance
- Debugging deployment issues
- UI improvements
- API integration assistance

### Claude

Used for:
- Express.js backend architecture guidance
- JWT authentication workflow
- MongoDB Atlas setup
- Deployment troubleshooting

---

# 💡 Where AI Helped

- Generated Angular boilerplate components and services
- Assisted in designing JWT authentication flow
- Helped debug MongoDB Atlas connection issues
- Assisted with deployment to Render and Vercel
- Helped resolve CORS and production API URL issues

---

# 👨‍💻 What I Implemented Myself

- Designed the application architecture
- Implemented Angular routing between Login, Register and Dashboard
- Integrated JWT authentication with Angular services
- Connected the Angular frontend with the deployed Express backend
- Implemented CRUD operations for tasks
- Added automatic UI refresh after task operations
- Designed and customized the dashboard UI
- Added task statistics (Total, Completed and Pending)
- Implemented user-specific task access using JWT middleware
- Tested the application locally and after deployment

---

# ⚡ Challenges Faced

- MongoDB Atlas connection failures due to DNS (SRV record) restrictions
- Debugging API URL mismatches between local and deployed environments
- Configuring CORS between Render backend and Vercel frontend
- Handling JWT authentication across frontend and backend
- Deploying Angular and Express applications separately

---

# 🚀 Future Improvements

- Environment-based configuration using Angular environments
- Task categories and filtering
- Due dates and reminders
- Pagination
- Search functionality
- Drag-and-drop task management
- Dark mode
- Automated unit and integration tests
- Custom domain deployment

---

# 📄 License

This project was developed as part of the **Binaried AI Full Stack Developer Internship Assignment**.

---

# 👩‍💻 Author

**Sirisha VL**

GitHub: https://github.com/Siri-bit
