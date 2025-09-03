const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url); // log just the URL instead of the whole request object
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, server is running!');
});

// valid port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
