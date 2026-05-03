const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// ===============================
// ✅ Validation Middleware
// ===============================
const validateInput = (req, res, next) => {
  const { name, email, password } = req.body;

  // Check required fields
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  // Email format validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // Password length validation
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters"
    });
  }

  // If all checks pass
  next();
};

// ===============================
// ✅ Routes
// ===============================

// Test route
app.get('/', (req, res) => {
  res.send("Server is running");
});

// Register route with validation
app.post('/register', validateInput, (req, res) => {
  const { name, email } = req.body;

  res.status(200).json({
    success: true,
    message: "User registered successfully",
    data: {
      name,
      email
    }
  });
});

// ===============================
// ✅ 404 Handler (Optional but good practice)
// ===============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// ===============================
// ✅ Start Server
// ===============================
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});