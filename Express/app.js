const http = require('http'); // server
const requestHandler = require('./handler'); //importing handler file to server file
const server = http.createServer(requestHandler);
const PORT = 5009;
server.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});