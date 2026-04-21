const express = require('express');
const app = express();

app.use(express.json());

// =======================
// ROUTES
// =======================

// Success route
app.get('/success', (req, res) => {
    res.json({
        success: true,
        message: "Everything is fine!"
    });
});

// Error route (intentionally throws error)
app.get('/error', (req, res) => {
    throw new Error("This is a test error!");
});

// Example route with manual error
app.get('/user', (req, res) => {
    const user = null;

    if (!user) {
        throw new Error("User not found!");
    }

    res.json(user);
});

// =======================
// 404 HANDLER (UNKNOWN ROUTES)
// =======================
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// =======================
// ERROR MIDDLEWARE (GLOBAL ERROR HANDLER)
// =======================
const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        success: false,
        message: err.message || "Something went wrong"
    });
};

app.use(errorHandler);

// =======================
// START SERVER
// =======================
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});