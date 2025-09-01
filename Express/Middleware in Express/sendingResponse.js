// Core Modules
const http = require('http'); // server

// External Modules
const express = require('express');

const app = express(); // executing express

// Local Module (assuming it exports a router)
const requestHandler = require('./user'); 
app.use('/user', requestHandler); // mount it on /user

// First middleware 
app.use((req, res, next) => {
  console.log("First Middleware");
  next(); // request will go to next middleWare
});

// Second middleware
app.use((req, res, next) => {
  console.log("Second Middleware");
  next();
});

const server = http.createServer(app);
const PORT = 5009;
server.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
