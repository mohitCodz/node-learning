// Core Modules
const http = require('http'); // server

// External Modules
const express = require('express');

const app = express(); // executing express

//Local Module
const requestHandler = require('./handlingRoutes'); //importing 
const server = http.createServer(app);
const PORT = 5009; // port 
server.listen(PORT,()=>{
console.log(`Servre is listening at PORT${PORT}`);
});