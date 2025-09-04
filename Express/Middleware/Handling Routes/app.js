const express = require('express');
const app = express();

// Route for /submit-details
app.use('/submit-details', (req, res) => {
    console.log("Submit-details route triggered");
    res.send('<p>Welcome to submit details page</p>');
});

// Home route
app.use('/', (req, res) => {
    console.log("Home route triggered");
    res.send('<p>Welcome to Home</p>');
});

module.exports = app;
