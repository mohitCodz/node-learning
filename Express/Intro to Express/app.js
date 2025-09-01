const http = require('http');
const requestHandler = require('./user.js');

const server = http.createServer(requestHandler);
const PORT = 50001;
server.listen(PORT,()=>{

});