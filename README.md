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

