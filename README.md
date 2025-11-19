# Task Management Application (Node.js + MongoDB + JWT Auth)

A simple and secure Task Management API built with Node.js, Express, MongoDB, and JWT Authentication.
Users can register, log in, and manage their tasks securely using protected routes.

## 🚀 Features
### 🔐 Authentication

User Registration

User Login

Password Hashing using bcryptjs

JWT Token generation

Protected routes using middleware

### 📝 Task Management

Create Task

Get All Tasks

Get Task by ID

Update Task

Delete Task

Each task linked to a specific user (Owner)

### 🛡 Security

JWT-based authorization

Password encrypted

MongoDB Atlas cloud database

Bearer <token> format authentication

### 🌐 Deployment

Backend deployed on Render

Database hosted on MongoDB Atlas

### ⚙️ Tech Stack

Node.js

Express

MongoDB Atlas

Mongoose

JWT

bcryptjs

Render / Railway (deployment)

### 🔑 Environment Variables

Create a .env file in the root directory:

MONGO_URI=your-mongodb-atlas-url

JWT_SECRET=your-secret-key

PORT=5000

### 🧪 API Testing (Thunder Client / Postman)
Add Authorization Header

For all protected routes (Tasks):

Authorization: Bearer <your_access_token>

### 📌 API Endpoints
User Routes

Method	Endpoint	Description

POST	/api/users/register  =>	Register new user

POST	/api/users/login	=> Login & get JWT token

Task Routes (Protected)

Method	Endpoint	Description

POST	/api/tasks	=>Create task

GET	/api/tasks	=>Get logged-in user's tasks

GET	/api/tasks/:id	=>Get task by ID

PUT	/api/tasks/:id	=>Update task

DELETE	/api/tasks/:id	=>Delete task

### 🚀 How to Run Locally

git clone https://github.com/Sandeepmothe/TaskManagementWithAuth.git

cd TaskManagementWithAuth

npm install

npm start


### Server starts on:

http://localhost:5000
