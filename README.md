# 📝✨ Full Stack Todo List App  
---

## 🌈 Hello coders 👋  # 📓✨ Task Journal

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

* Django
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

- 🔍 Search & Filter Tasks
- 📅 Due Dates
- ⭐ Task Priorities
- 👤 Profile Settings
- ☁️ Database Improvements

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


Welcome to this little corner of code ✨  
This Todo List app started as a simple idea — just managing tasks — and slowly grew into a full-stack project with authentication, API calls, and real-world logic.

If you're exploring React, Django, or just love building things step by step, you're going to enjoy this 💫  

---


## 🚀 Overview  

A full-stack Todo List application built with:  

🎨 **React** (frontend)  
⚙️ **Django REST Framework** (backend)  

It lets users securely manage their tasks with authentication and smooth API interaction 🌿  

---

## 🌍 Live Demo  

| Service   | Link |
|----------|------|
| 🚀 Frontend | https://simple-todolist-rho.vercel.app |
| ⚙️ Backend | https://todolist-6be2.onrender.com |

> ⚠️ Backend is hosted on Render (free tier), so first request may take a few seconds due to cold start.

---
## 📸 Application Preview

### 🌙 Dark Mode

<p align="center">
  <img src="screenshots/login-dark.png" width="30%">
  <img src="screenshots/journal-dark.png" width="30%">
  <img src="screenshots/register-dark.png" width="30%">
</p>

<p align="center">
  <em>Login • Task Journal • Task Management</em>
</p>

---

### ☀️ Light Mode

<p align="center">
  <img src="screenshots/login-light.png" width="30%">
  <img src="screenshots/journal-light.png" width="30%">
  <img src="screenshots/register-light.png" width="30%">
</p>

<p align="center">
  <em>Login • Task Journal • Register</em>
</p>

---

## ✨ Features  

- 🔐 User authentication (Register & Login)  
- 🔄 Access + refresh token handling  
- ♻️ Auto token refresh using Axios interceptors  
- ➕ Add tasks  
- 🗑️ Delete tasks  
- ✏️ Edit/update tasks  
- 📋 View all tasks  
- 🚫 Protected routes  
- ⚡ Loading & error handling
- 🌍 Deployed on Vercel & Render

---

## 🛠️ Tech Stack  

**Frontend**  
🎨 React  
🔗 Axios  
💅 CSS  

**Backend**  
⚙️ Django  
📡 Django REST Framework  
🔐 Simple JWT  

---

## 📁 Project Structure  

```
frontend/   → React app 🌐  
backend/    → Django API ⚙️  
```

---

## ⚙️ Setup  

### 💻 Frontend  

```
cd frontend  
npm install  
npm start  
```

### 🌐 Environment Variable  

Create a `.env` file in frontend:

REACT_APP_API_URL=http://127.0.0.1:8000

### 🧠 Backend  

```
cd backend  
pip install -r requirements.txt  
python manage.py migrate  
python manage.py runserver  
```

---

## 🔐 Auth Flow (in simple terms)  

- Login → get tokens 🎟️  
- Requests use access token 🔑  
- If expired → auto refresh 🔄  
- If refresh fails → logout 🚪  

Smooth and automatic ✨  

---

## 🌱 What I Learned  

- Connecting frontend ↔ backend 🔗  
- JWT authentication in real apps 🔐  
- Axios interceptors ⚡  
- Managing state & async logic 🧠  
- Building step by step and improving gradually 🌿  

---

## 🔮 Future Ideas  

- 🎨 Better UI/UX  
- 🔍 Search & filter  
- 📄 Pagination  
- ✅ Mark tasks complete  
- 🌙 Dark mode  

---


## 👨‍💻 Author  

R.Adhira 🌟
https://github.com/adhirasuma 

---

## 💬 Final Thought  

This project may look simple, but it carries a lot of learning behind it — from basic CRUD to handling authentication flows.  
Always learning, always improving  🚀  
