const express = require('express');
const app = express();

// Example route that throws an error
app.get('/test', (req, res, next) => {
    // Simulating an error
    const err = new Error("This is a test error");
    err.status = 500; // Set the status code of the error
    next(err); // Pass the error to the error handling middleware
});

