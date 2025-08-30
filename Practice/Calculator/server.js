const http = require('http');
const { requestHandler } = require('./incomingRequest');

const PORT = 5005;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});
