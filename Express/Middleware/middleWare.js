// External Modules
const express = require('express');

const app = express(); // executing express

// Local Module (assuming it exports a router)
const requestHandler = require('./user'); 
app.use('/user', requestHandler); // mount it on /user

// we can add middleware by using .use
// First middleware 
app.use((req, res, next) => {
  console.log("First Middleware", req.url,req.method);
  next(); // request will go to next middleWare
});

// Second middleware
app.use((req, res, next) => {
  console.log("Second Middleware",req.url,req.method);
  next();
});

const server = http.createServer(app);
const PORT = 5009;
server.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
