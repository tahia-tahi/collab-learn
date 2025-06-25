# 📚 Collab Learn

A collaborative online group-study assignment platform designed to simplify assignment sharing, submission, and evaluation — all in one place.

## 🔗 Live URL
👉 (https://collab-learn-b1813.web.app/)


## 🎯 Project Purpose

**Collab Learn** enables students and educators to:
- Create and manage assignments.
- Submit and evaluate work.
- Filter assignments based on difficulty.
- Enable secure and role-based task handling.

This platform is built with a modern tech stack to provide a smooth, interactive, and responsive experience for all users.

---

## 🔗 Project Links

- 🔴 [Live Website](https://collab-learn-b1813.web.app/)
- 🟢 [Client-side Code](https://github.com/tahia-tahi/collab-learn)
- ⚙️ [Server-side Code](https://github.com/tahia-tahi/collab-learn-server)

---

## 🔐 Backend API Overview (JWT Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/jwt` | Generates JWT token upon login/signup |
| `GET` | `/assignments` | Retrieves all assignments |
| `POST` | `/assignments` | Creates a new assignment |
| `PUT` | `/assignments/:id` | Updates an assignment (creator only) |
| `DELETE` | `/assignments/:id` | Deletes an assignment (creator only) |
| `POST` | `/submissions` | Submits assignment |
| `GET` | `/submissions/:id` | Gets submissions for an assignment |
| `PATCH` | `/submissions/:id` | Adds marks and feedback |

🚀 Key Features
📝 Assignment Creation with difficulty level tagging (Easy, Medium, Hard)

🧠 Full CRUD Functionality – Create, Read, Update, and Delete assignments (for authorized users)

📂 Filter Assignments by difficulty level

✅ Marking System for submitted assignments

🔒 Role-Based Access – Only creators can update or delete their assignments

🔐 JWT Authentication – Secure backend API access using JSON Web Tokens

🎉 Toast Notifications and stylish alerts with React Toastify and SweetAlert2

📅 Date Picker Integration using react-datepicker

⚙️ Secure Authentication via Firebase

🌙 Modern UI with Tailwind CSS and Framer Motion animations

🔄 Protected Routes using React Router

🌐 Deployed on Firebase

---

## 🧩 NPM Packages Used

| Package | Description |
|--------|-------------|
| **react** | Core library for building UI |
| **react-dom** | DOM rendering for React |
| **react-router** | Routing system for React |
| **axios** | Promise-based HTTP client |
| **firebase** | Authentication and hosting |
| **tailwindcss** | Utility-first CSS framework |
| **@tailwindcss/vite** | Tailwind plugin for Vite |
| **framer-motion** | Animation library for React |
| **react-icons** | Icon library for React |
| **sweetalert2** | Beautiful alerts and confirmations |
| **react-toastify** | Notification toasts |
| **react-datepicker** | Date selection component |

---

## 💻 How to Run the Project Locally

To run the full-stack **Collab Learn** project on your local machine, follow the steps below for both client and server setup.

---

### 🧾 Prerequisites

Ensure you have these installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## 🖥 Client Setup (Frontend)

1. **Clone the client repo:**

```bash
git clone https://github.com/tahia-tahi/collab-learn-client.git
```

2. **Navigate to the project folder:**

```bash
cd collab-learn-client
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start the client app:**

```bash
npm run dev
```

✅ The React app will run on: `http://localhost:5173`

---

## ⚙️ Server Setup (Backend)

1. **Clone the server repo:**

```bash
git clone https://github.com/tahia-tahi/collab-learn-server.git
```

2. **Navigate to the server folder:**

```bash
cd collab-learn-server
```

3. **Install dependencies:**

```bash
npm install
```

4. **Create a `.env` file in the root folder and add your environment variables:**

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

5. **Start the server:**

```bash
npm run start
```

✅ The server will run on: `http://localhost:3000`

---

## 🔐 JWT Authentication Notes

- After login/signup, the server returns a JWT token.
- All protected routes require this token in the `Authorization` header like:

```
Authorization: Bearer your_token_here
```

---

Now you can use both client and server together locally. Happy coding! 💻🚀


