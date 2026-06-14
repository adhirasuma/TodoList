# 📓✨ Task Journal

> A notebook-inspired full-stack task management application built with React and Django REST Framework.

---

## 🌈 Hello Coders 👋

Welcome to **Task Journal** ✨

What started as a simple Todo List gradually evolved into a full-stack web application with authentication, API integration, responsive design, theme customization, and smooth animations.

Instead of creating another generic task manager, I wanted something that felt more personal—a digital notebook where tasks could be managed in a clean and minimal journal-like interface 📖.

---

## 🚀 Overview

Task Journal is a full-stack application built using:

🎨 **React.js** for the frontend

⚙️ **Django REST Framework** for the backend

The application allows users to securely create, update, and manage their daily tasks with JWT authentication and a notebook-inspired user experience.

---

## 🌍 Live Demo

| Service     | Link                                   |
| ----------- | -------------------------------------- |
| 🚀 Frontend | https://simple-todolist-rho.vercel.app |
| ⚙️ Backend  | https://todolist-6be2.onrender.com     |

> ⚠️ Backend is hosted on Render's free tier and may take a few seconds to wake up after inactivity.

---

## 🌙 Dark Mode Experience

<table>
<tr>
<td align="center">
<img src="screenshots/login-dark.png" width="300"><br>
<b>Login Page</b>
</td>

<td align="center">
<img src="screenshots/journal-dark.png" width="300"><br>
<b>Task Journal</b>
</td>

<td align="center">
<img src="screenshots/register-dark.png" width="300"><br>
<b>Task Management</b>
</td>
</tr>
</table>

---

## ☀️ Light Mode Experience

<table>
<tr>
<td align="center">
<img src="screenshots/login-light.png" width="300"><br>
<b>Login Page</b>
</td>

<td align="center">
<img src="screenshots/journal-light.png" width="300"><br>
<b>Task Journal</b>
</td>

<td align="center">
<img src="screenshots/register-light.png" width="300"><br>
<b>Task Management</b>
</td>
</tr>
</table>

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Access & Refresh Tokens
* Automatic Token Refresh using Axios Interceptors
* Protected Routes
* Secure Logout

### 📓 Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* View Personal Tasks
* Persistent Database Storage

### 🎨 User Experience

* Notebook-Inspired Journal Design
* Dark Mode & Light Mode
* Smooth Theme Transitions
* Responsive Layout
* Toast Notifications
* Page Animations
* Logo Animation
* Material UI Components

### ☁️ Deployment

* Frontend deployed on Vercel
* Backend deployed on Render

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Material UI
* CSS3

### Backend

* Django REST Framework
* Simple JWT

### Deployment

* Vercel
* Render

---

## 📁 Project Structure

```text
TO-DO LIST
│
├── backend
│   ├── api
│   ├── server
│   ├── manage.py
│   ├── requirements.txt
│   └── db.sqlite3
│
└── frontend
    ├── src
    │   ├── Api
    │   ├── Components
    │   ├── Pages
    │   ├── App.js
    │   └── App.css
    │
    ├── public
    └── package.json
```

---

## ⚙️ Local Setup

### Frontend

```bash
cd frontend

npm install

npm start
```

Create a `.env` file inside the frontend folder:

```env
REACT_APP_API_URL=http://127.0.0.1:8000
```

### Backend

```bash
cd backend

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

---

## 🔐 Authentication Flow

```text
Login
   │
   ▼
Receive Access & Refresh Tokens
   │
   ▼
API Requests use Access Token
   │
   ▼
Token Expired?
   │
  Yes
   │
   ▼
Axios Interceptor Refreshes Token
   │
   ▼
Continue Request Seamlessly
```

If the refresh token is invalid or expired, the user is automatically logged out.

---

## 🌱 What I Learned

This project helped me gain practical experience with:

* React Component Architecture
* REST API Integration
* Django REST Framework
* JWT Authentication
* Axios Interceptors
* Protected Routing
* State Management
* Responsive UI Design
* Frontend & Backend Deployment
* Full Stack Application Development

---

## 🔮 Future Improvements

* 🔍 Search Tasks
* 🏷️ Task Categories
* 📅 Due Dates
* 📊 Task Statistics
* ☁️ Cloud Database
* 👤 User Profile Settings

---

## 👨‍💻 Author

**R. Adhira**

GitHub: https://github.com/adhirasuma

---

## 💬 Final Thought

Task Journal may look simple on the surface, but it represents my journey through full-stack development—from building REST APIs and implementing JWT authentication to creating responsive user interfaces and deploying production-ready applications.

Every feature was built step by step, and every challenge became a learning opportunity.

✨ Always learning.
🚀 Always building.
📖 One task at a time.
