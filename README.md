# FastAPI Backend Assignment

## Overview
This project is a backend API with authentication, role-based access, and CRUD functionality, along with a simple frontend to demonstrate the API usage. Built for the Backend Developer Internship assignment.

## Features
### Backend
- User registration and login with **JWT authentication** and **password hashing**
- Role-based access (user vs admin)
- CRUD APIs for **tasks**
- API documentation via **Swagger UI**
- SQLite database (`test.db`) used for demo
- Error handling, input validation, and secure token handling

### Frontend
- Simple **HTML + JS** interface
- Register & login users
- Access protected `/me` endpoint
- Perform CRUD actions on tasks
- Display API responses and error messages

## Technologies
- **Backend:** FastAPI, Python, SQLAlchemy, SQLite
- **Frontend:** HTML, JavaScript (Vanilla JS)
- **Authentication:** JWT, OAuth2PasswordBearer

## How to Run
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd fastapi-backend-assignment
   
2. Activate virtual environment:
   ```bash
   .\venv\Scripts\activate

3. Install dependencies:
   ```bash
   pip install -r requirements.txt

4. Run the server:
   ```bash
   uvicorn main:app --reload

5. Open index.html in a browser to access the frontend.

## API Endpoints

- **POST /register** – Register a new user
- **POST /login** – Login and get JWT token
- **GET /me** – Get current user info (JWT required)
- **GET /tasks** – Get all tasks (JWT required)
- **POST /tasks** – Create a task (JWT required)
- **PUT /tasks/{id}** – Update a task (JWT required)
- **DELETE /tasks/{id}** – Delete a task (JWT required)

## Notes

- SQLite database is used for simplicity; can be replaced with PostgreSQL/MySQL.
- JWT tokens expire in a set time (can be configured in `auth.py`).
- The project structure allows for easy addition of new modules and endpoints.

## Author

Kawaljeet Kaur  
Backend Developer Intern Assignment
