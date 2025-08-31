// server
const http  = require('http');
const server = http.createServer();

const PORT = 5008;
server.listen(PORT,()=>{
console.log("Server is listening at ");
});