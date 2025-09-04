const http = require('http');
const app = require('./app'); // Import the Express app

const PORT = 5009;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});
