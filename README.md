# 🎓 College Event Registration System (Full Stack)

A modern full-stack web application that allows students to register for college events, with a structured backend for handling registrations, APIs, and email notifications.

This project demonstrates real-world architecture using React (frontend) and Node.js + Express (backend) with MVC pattern.

---

## 🌐 Live Demo

👉 https://college-event-registration-alpha.vercel.app

---

## 🚀 Features

### 👨‍🎓 User Features

* 🧑 Event registration form
* 📅 Event selection
* ✅ Real-time form validation
* 🤖 Chatbot interface
* 📩 Submission confirmation

### 🛠️ Backend Features

* 📥 REST API for registration
* 🧠 MVC architecture (Controllers, Routes, Models)
* 💾 Database-ready schema (Mongoose)
* 📧 Email integration using Nodemailer

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Tools & Libraries

* Axios
* Dotenv
* Nodemailer
* Mongoose

---

## 📂 Project Structure

```
college-event-registration/
│
├── backend/
│   ├── controllers/
│   │   └── registrationController.js
│   │
│   ├── models/
│   │   └── Registration.js
│   │
│   ├── routes/
│   │   └── registerRoutes.js
│   │
│   ├── utils/
│   │   └── sendEmail.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── EventForm.js
│   │   │   └── ChatBot.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── EventForm.css
│   │   │   ├── Header.css
│   │   │   └── index.css
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── .env
│   └── package.json
│
├── screenshots/
│   ├── form.png
│   └── success.png
│
└── README.md
```

---

## 📸 Screenshots

### 📝 Event Registration Form

<img width="1358" height="886" alt="image" src="https://github.com/user-attachments/assets/7f76a9d8-f2ab-44ab-93a0-93b1dc1c4842" />

---

## ⚙️ How to Run Locally

### 1. Clone Repository

```
git clone https://github.com/Balamurugan200526/college-event-registration.git
cd college-event-registration
```

---

### 2. Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

Run backend:

```
node server.js
```

---

### 3. Setup Frontend

```
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoint

### POST `/api/register`

Registers a new event participant.

**Request Body:**

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "event": "Tech Fest"
}
```

---

## 💡 Future Improvements

* 🔐 Authentication (Login/Signup with JWT)
* 📊 Admin Dashboard
* 📧 Email templates
* 🎟 QR Code ticket system
* 🌐 Full deployment (Backend + Database)

---
---

## 👨‍💻 Author

**S. Balamurugan**

GitHub: https://github.com/Balamurugan200526

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
