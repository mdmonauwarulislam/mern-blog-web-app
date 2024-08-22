# MERN Blog App

A full-stack blog application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project includes user authentication, blog creation, editing, and deletion, and more.

## Features

- User Authentication (Login/Register)
- Create, Read, Update, Delete (CRUD) operations for blogs
- Protected routes for authenticated users
- JWT-based authentication
- Responsive design using React

## Project Structure

```plaintext
mern-blog-app/
│
├── backend/             # Backend server code
│   ├── config/          # Configuration files (DB, JWT, etc.)
│   ├── controllers/     # Controllers for handling requests
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point for the backend
│
├── frontend/            # Frontend React app
│   ├── public/          # Public assets
│   ├── src/             # React components, hooks, pages
│   └── package.json     # Frontend dependencies
│
└── README.md            # Project documentation

```
## Clone the repository
```Plaintext
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

## Install frontend dependencies
```Plaintext
cd ../frontend
npm install

```
##  install backend dependencies
```Plaintext
cd backend
npm install

```
## Run the app
```plaintext
npm start

```
## Environment Variables
```Plaintext
NODE_ENV = development
PORT = 5000
URI = http://localhost:3000
MONGO_URI = your_mongodb_connection_string
JWT_SECRET_KEY = your_jwt_secret_key
JWT_EXPIRE = jwt_expiration_time
RESET_PASSWORD_EXPIRE = reset_password_expiration_time

```
### Explanation:

- **Repository URL**: Replace `your-username/your-repo-name` with your actual GitHub username and repository name.
- **Environment Variables**: Replace placeholders such as `your_mongodb_connection_string`, `your_jwt_secret_key`, etc., with the actual values.
- **Other Sections**: You can modify sections like Features, Project Structure, etc., based on the specifics of your project. 









