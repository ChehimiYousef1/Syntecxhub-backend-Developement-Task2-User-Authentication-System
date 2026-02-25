const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Authentication API",
      version: "1.0.0",
      description: `
Backend Week 2 – Task 2  
User Authentication System (MERN Stack Backend Module)

This API provides secure user registration, login, logout,
JWT authentication, protected routes, and token blacklisting.

Developed by Youssef El Chehimi.
      `,
      contact: {
        name: "Youssef El Chehimi",
        email: "chehimi030@gmail.com"
      }
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Development Server"
      },
      {
        url: "https://user_authentication_system.onrender.com",
        description: "Production Server (Render)"
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJsDoc(options);
