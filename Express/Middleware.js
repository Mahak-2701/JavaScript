const express = require('express');
const app = express();

// Middleware function to log the timestamp of each request
const logTimestamp = (req, res, next) => {
    console.log(`Timestamp: ${new Date().toLocaleString()}`);
    next(); // Call the next middleware in the stack
};

