const http = require('http');
const { requestHandler } = require('./incomingRequest')
const server = http.createServer(requestHandler);
const PORT = 5005;
server.listen(PORT,()=>{
   console.log(`Server is running at ${PORT}`);
});