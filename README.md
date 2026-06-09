# Student Resource App

A full-stack web application that helps students access and manage academic resources efficiently. The application provides secure user authentication and a user-friendly interface for managing student-related resources.

## Features

- User Registration
- User Login Authentication
- Secure Session Management
- Responsive User Interface
- RESTful API Integration
- MySQL Database Connectivity
- Resource Management System

## Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

## Project Architecture

```text
React Frontend
       ↓
REST APIs
       ↓
Node.js + Express.js Backend
       ↓
MySQL Database
```

## Authentication Flow

```text
User Login/Register
        ↓
Frontend Validation
        ↓
API Request
        ↓
Backend Verification
        ↓
Database Check
        ↓
Authentication Success
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd student-resource-app
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Database Setup

- Create a MySQL database.
- Update database credentials in the `.env` file.
- Run the required SQL scripts.

## Future Enhancements

- File Upload Support
- Search and Filter Resources
- Resource Categorization
- Admin Dashboard
- AI-Based Resource Recommendations

## Learning Outcomes

- Full Stack Development
- REST API Design
- Authentication and Authorization
- Database Integration
- Client-Server Architecture

## Author

Sai Dinesh Reddy