⚙️ Prerequisites and Development Setup

To build and run the ResolveNow online complaint registration and management system, make sure the following tools and technologies are installed and properly configured on your system.

🟢 Node.js and npm

Node.js allows you to run JavaScript on the server side.

npm (Node Package Manager) helps you install required libraries.

Download: https://nodejs.org/en/download/

Installation Guide: https://nodejs.org/en/download/package-manager/

🚀 Express.js

A minimal and powerful web framework for Node.js.

Used for backend routing, handling APIs, and middleware.

To install, run: npm install express

🍃 MongoDB

A NoSQL database that stores data in flexible, JSON-like format.

Used to store user data, complaints, chat messages, and more.

Download: https://www.mongodb.com/try/download/community

Installation Guide: https://docs.mongodb.com/manual/installation/

⚛️ React.js

A JavaScript library for building fast and interactive user interfaces.

Used to build the frontend of this project.

Setup Guide: https://reactjs.org/docs/create-a-new-react-app.html

🧰 Other Essential Tools

🌐 HTML, CSS, JavaScript – for building and styling web pages

📦 Axios – to send HTTP requests from React to the backend

🎨 Bootstrap & Material UI – for responsive and attractive UI components

🔧 Git – for version control and collaboration

Git Download: https://git-scm.com/downloads

🛠️ Project Setup

Frontend (React.js):

Create a React app using: npx create-react-app frontend

Install dependencies: Axios, Bootstrap, Material UI

Build UI components: Login, Registration, Dashboard, Complaint Form

Set up routing using react-router-dom

Connect frontend with backend APIs using Axios

Backend (Node.js + Express.js):

Initialize project with: npm init -y

Install dependencies: Express, Mongoose, CORS, Body-parser

Set up Express server (server.js)

Create routes for authentication, complaint handling, and chat

Connect to MongoDB using Mongoose

🗂️ Database Schemas

👤 User Schema
Fields: name, email, password, phone, userType

📝 Complaint Schema
Fields: userId, name, address, city, state, pincode, comment, status

📌 Assigned Complaint Schema
Fields: agentId, complaintId, agentName, status

💬 Chat Message Schema
Fields: name, message, complaintId

Each schema is managed using Mongoose and stored in MongoDB.

🔐 Authentication

JWT-based authentication is used

Includes registration, login, and protected routes

Tokens are stored securely and sent with each request

🧑‍💼 Admin Features

Assign complaints to agents

Track status of all complaints

View and manage users and system data

❗ Error Handling

Central error handler to manage application issues

Validates user input and shows proper error messages

Uses status codes like 400, 401, 404, 500

📦 Version Control & Deployment

Use Git and GitHub for version control

Deploy frontend on Vercel or Netlify

Deploy backend on Render, Railway, or Heroku

Use MongoDB Atlas for cloud database hosting

🖥️ Recommended Tools for Development

Visual Studio Code (VS Code)

WebStorm

Sublime Text

📚 Useful Learning Resources

Node.js + MongoDB Integration: https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/

React Documentation: https://reactjs.org/

Express Documentation: https://expressjs.com/

MongoDB Documentation: https://docs.mongodb.com/
