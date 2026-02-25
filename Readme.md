# 🔐 User Authentication System API

## MERN Stack Backend – Authentication Module

Repository:
https://github.com/ChehimiYousef1/Syntecxhub-backend-Developement-Task2-User-Authentication-System.git

Developed by **Youssef El Chehimi** Role: Full Stack MERN Developer
(Backend Focus)

------------------------------------------------------------------------

## 📌 Project Overview

This project is a secure and production-ready User Authentication API
built using:

-   Node.js
-   Express.js
-   MongoDB (Cloud – Atlas)
-   Mongoose
-   bcrypt
-   JSON Web Token (JWT)
-   Swagger (OpenAPI Documentation)

It provides:

-   User Registration
-   User Login
-   JWT Authentication
-   Protected Routes
-   Logout with Token Blacklisting
-   Interactive Swagger Documentation

This backend module represents part of a MERN Stack Developer task and
demonstrates secure authentication architecture and professional backend
structure.

------------------------------------------------------------------------

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

git clone
https://github.com/ChehimiYousef1/Syntecxhub-backend-Developement-Task2-User-Authentication-System.git

cd Syntecxhub-backend-Developement-Task2-User-Authentication-System

## 2️⃣ Install Dependencies

npm install

## 3️⃣ Environment Variables

Create a `.env` file in the root directory:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/UserAuth_db
NODE_ENV=development
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=30d
PORT=3000

⚠️ MongoDB connection is already configured to use an online MongoDB
Atlas database. No local MongoDB setup is required.

------------------------------------------------------------------------

## 4️⃣ Run the Server

Development:

npm run dev

Or:

node src/server.js

Server URL: http://localhost:3000

Swagger Documentation: http://localhost:3000/api-docs

------------------------------------------------------------------------

# 🌐 Database

The application connects directly to a cloud database hosted on MongoDB
Atlas.

✔ No local MongoDB installation required  
✔ Ready-to-use online database connection  
✔ Production-style cloud environment

------------------------------------------------------------------------

# 🔐 API Endpoints

## Register

POST /api/auth/register

Body Example: { “username”: “Youssef”, “email”: “youssef@example.com”,
“password”: “StrongPass@123” }

Features: - Strong password validation - Email uniqueness validation -
Secure password hashing with bcrypt

------------------------------------------------------------------------

## Login

POST /api/auth/login

Body Example: { “email”: “youssef@example.com”, “password”:
“StrongPass@123” }

Response: { “token”: “JWT_TOKEN” }

-   JWT token generated with expiration
-   Payload contains user ID

------------------------------------------------------------------------

## Logout

POST /api/auth/logout

Header: Authorization: Bearer YOUR_TOKEN

-   Token is added to in-memory blacklist
-   Prevents reuse even before expiration

------------------------------------------------------------------------

# 🛡 Security Implementation

✔ Password hashing using bcrypt (salted hashing)  
✔ JWT token-based authentication  
✔ Middleware route protection  
✔ Token expiration control via environment variables  
✔ Token blacklist support  
✔ Structured error handling

------------------------------------------------------------------------

# 📂 Project Architecture

config/ migrations/ src/ ├── controllers/ ├── middleware/ ├── models/
├── routes/ ├── utils/ ├── server.js └── swagger.js

Clean separation of concerns:

-   Controllers → Business logic
-   Middleware → Authentication & validation
-   Models → Database schema
-   Routes → API endpoints
-   Utils → Helper utilities

------------------------------------------------------------------------

# 🧪 Testing the API

Option 1: Use Swagger UI at: /api-docs

Option 2: Use Postman or Thunder Client and include:

Authorization: Bearer <JWT_TOKEN>

------------------------------------------------------------------------

# 👨‍💻 Developer Information

Youssef El Chehimi Full Stack MERN Developer

Personal Email: chehimi030@gmail.com
Academic Email: Youssef.elchehimi@st.ul.edu.lb
Professional Email: Youssef@openmindsaihamburg.com 
Phone: +96171006864 (Only WhatsApp).

------------------------------------------------------------------------

# 🎯 Project Objective

This project demonstrates:

-   Secure backend authentication practices
-   Clean and scalable Node.js architecture
-   Cloud database integration (MongoDB Atlas)
-   Professional API documentation with Swagger
-   Production-ready backend design

Ready for deployment on platforms such as Render.
