# User Authentication API

This is a Node.js and Express API for user registration, login, and searching users by username or email. It uses MongoDB for database storage and JWT for authentication.

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```sh
git clone <your-repository-url>
cd server
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

### 4. Start the Server

```sh
npm run dev
```

The server will run on `http://localhost:5000` (or the port specified in `.env`).

## API Endpoints

### 1. Register a User

**POST** `/api/auth/user-registeration`

### 2. Login User

**POST** `/api/auth/user-login`

### 3. Search User by Username or Email

**POST** `/api/user/search-user`

## Testing with Postman

Use Postman to test the API endpoints by sending HTTP requests with JSON payloads.

### Authentication

- JWT token is stored in HTTP-only cookies.
- Ensure cookies are enabled in Postman for authentication-based requests.

---

For any issues, feel free to open an issue in the repository or reach out!
