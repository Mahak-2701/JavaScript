const express = require('express');
const app = express();
const port = 3000;

// Define a route that responds with a message
app.get('/greet', (req, res) => {
    res.send('Hello from the /greet route!');
});

// Define another route
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});