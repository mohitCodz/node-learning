// Core Modules
const http = require('http'); // server

// External Modules
const express = require('express');

const app = express(); // executing express

//Local Module
const requestHandler = require('./user'); //importing 
const server = http.createServer(app);
const PORT = 5009; //
server.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});