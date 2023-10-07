// Import required modules
const express = require("express");
const session = require("express-session");

// Create an Express application
const app = express();

// Configure session middleware
app.use(
  session({
    secret: "your-secret-key", // Change this to a secure random string
    resave: false,
    saveUninitialized: true,
  })
);

// Create an in-memory users database (for demonstration purposes)
const users = [];

// Set up your routes for registration and login

// Registration route
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  // Perform validation, hash the password, and save the user to the database
  // For simplicity, we're not doing password hashing in this example
  users.push({ username, password });
  res.send("Registration successful!");
});

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Check if the user exists in the database and validate the password
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    req.session.isLoggedIn = true;
    req.session.username = username;
    res.send("Login successful!");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

