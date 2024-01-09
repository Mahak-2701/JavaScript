const express = require('express');
const app = express();

// Middleware function to log the timestamp of each request
const logTimestamp = (req, res, next) => {
    console.log(`Timestamp: ${new Date().toLocaleString()}`);
    next(); // Call the next middleware in the stack
};

// Middleware function to log the request method and URL
const logRequestDetails = (req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next();
};

