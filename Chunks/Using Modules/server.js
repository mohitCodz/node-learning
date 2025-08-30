const http = require('http'); // server
const server = http.createServer();


const PORT = 5003;
server.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
