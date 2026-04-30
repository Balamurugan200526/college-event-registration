# 🎓 College Event Registration System (Full Stack)

A modern full-stack web application that allows students to register for college events, with a structured backend for handling registrations, APIs, and email notifications.

This project demonstrates a real-world architecture using React (frontend) and Node.js + Express (backend).

---

## 🌐 Live Demo

👉 https://college-event-registration-alpha.vercel.app

---

## 🚀 Features

### 👨‍🎓 User Features
- 🧑 Event registration form  
- 📅 Select and submit event details  
- ✅ Real-time form validation  
- 🤖 Chatbot support (basic UI interaction)  
- 📩 Confirmation feedback  

---

### 🛠️ Backend Features
- 📥 REST API for registration handling  
- 🧠 MVC architecture (Controller, Routes, Models)  
- 💾 Database-ready schema (Mongoose)  
- 📧 Email sending functionality  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- CSS3  
- JavaScript (ES6)  

### Backend
- Node.js  
- Express.js  

### Tools & Libraries
- Axios (API calls)  
- Dotenv (environment variables)  
- Nodemailer (email service)  
- Mongoose (if MongoDB used)  

---

## 📂 Project Structure

college-event-registration/
│
├── backend/
│ ├── controllers/
│ │ └── registrationController.js
│ │
│ ├── models/
│ │ └── Registration.js
│ │
│ ├── routes/
│ │ └── registerRoutes.js
│ │
│ ├── utils/
│ │ └── sendEmail.js
│ │
│ ├── .env
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ │ └── index.html
│ │
│ ├── src/
│ │ ├── components/
│ │ │ ├── Header.js
│ │ │ ├── EventForm.js
│ │ │ └── ChatBot.js
│ │ │
│ │ ├── services/
│ │ │ └── api.js
│ │ │
│ │ ├── styles/
│ │ │ ├── App.css
│ │ │ ├── EventForm.css
│ │ │ ├── Header.css
│ │ │ └── index.css
│ │ │
│ │ ├── App.js
│ │ └── index.js
│ │
│ ├── .env
│ └── package.json
│
├── screenshots/
│ ├── form.png
│ └── success.png
│
└── README.md
---

## 📸 Screenshots

### 📝 Event Registration Form  
![Registration Form](screenshots/form.png)

---

### ✅ Submission Success  
![Success Message](screenshots/success.png)

---

## ⚙️ How to Run Locally

### 1. Clone the repository
git clone https://github.com/Balamurugan200526/college-event-registration.git

---

### 2. Setup Backend
cd backend  
npm install  

Create `.env` file:
PORT=5000  
MONGO_URI=your_mongodb_connection  
EMAIL_USER=your_email  
EMAIL_PASS=your_password  

Run backend:
node server.js  

---

### 3. Setup Frontend
cd frontend  
npm install  
npm start  

---

## 🔗 API Endpoint

### POST /api/register

Registers a new event participant.

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "event": "Tech Fest"
}

---

## 💡 Future Improvements

- 🔐 Authentication (JWT आधारित login/signup)  
- 📊 Admin Dashboard  
- 📧 Automated email templates  
- 🎟 QR Code ticket system  
- 🌐 Full deployment (Frontend + Backend)  

---

## ⚠️ Disclaimer

This project is developed for **educational purposes only**.  
Do not use real credentials in `.env` files.

---

## 👨‍💻 Author

**S. Balamurugan**  
GitHub: https://github.com/Balamurugan200526  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
