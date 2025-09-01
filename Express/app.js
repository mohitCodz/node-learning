// Core Modules
const http = require('http'); // server
// External Modules
const express = require('express');
//Local Module
const requestHandler = require('./user'); //importing 
const server = http.createServer(requestHandler);
const PORT = 5009;
server.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});