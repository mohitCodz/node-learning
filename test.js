// creating a server

const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req);
});

// port
const PORT = 300001;
server.listen(PORT()=>{
console.log(`Server is listenign at PORT${PORT}`);
});