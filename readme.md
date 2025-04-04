# 📝 My Todo App

A simple and efficient full-stack **Todo App** built using **React** (frontend) and **Express + MongoDB** (backend). Users can view their todos, and mark them as completed with a single click.

----------

## 🚀 Features

-   Add todos with a title and description
    
-   View all todos
    
-   Mark todos as complete ✅
    
-   Responsive and minimal UI
    
-   Clean backend API integration
    
-   Input validation using Zod
    

----------

## 💠 Tech Stack

### Frontend:

-   React 19
    
-   Vite
    
-   JavaScript (ES6+)
    
-   CSS
    

### Backend:

-   Node.js
    
-   Express.js
    
-   MongoDB with Mongoose
    
-   Zod (for request validation)
    
-   CORS for cross-origin requests
    

----------

## 📁 Folder Structure

```
my-todo-app/
│
├── backend/
│   ├── index.js              # Main backend server
│   ├── db.js                 # Mongoose connection & schema
│   ├── types.js              # Zod validation schemas
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Todos.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md

```

----------

## 📸 Screenshots

![Homepage Screenshot](./screenshots/homepage.png)
----------

## 🧑‍💻 Getting Started

Follow these steps to run the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/cipher-sphere/my-todo-app.git
cd my-todo-app

```

----------

### 2. Setup Backend

```bash
cd backend
npm install

```

Start the backend server:

```bash
node index.js

```

The backend should be running on `http://localhost:3000`

----------

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev

```

The frontend will launch at `http://localhost:5173` (or whatever Vite shows).

Make sure both frontend and backend are running simultaneously.

----------

## 📦 API Endpoints

### `GET /todos`

Fetch all todos

### `POST /todo`

Create a new todo

```json
{
  "title": "Example",
  "description": "Sample description"
}

```

### `PUT /update`

Mark a todo as completed

```json
{
  "id": "mongo_object_id",
  "completed": true
}

```

----------

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you’d like to change.

----------

## 👨‍💻 Author

-   **Shivam Kumar Sharma**  
    Connect with me on [LinkedIn](https://www.linkedin.com/in/shivam-sharma-638617245/)
    

----------
