const express = require('express');
const path = require('path');
const app = express();


// Define the path to the public folder
const publicPath = path.join(__dirname, 'public');

// Middleware to serve static files from the public folder
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    // This will serve the "page.html" file from the public folder
    res.sendFile(path.join(publicPath, 'page.html'));
});

app.get('/image', (req, res) => {
    res.send("<h1>This is an image!!</h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});