// creating a server

const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req.url,req.method);
});

// port
const PORT = 300001;
server.listen(()=>{
console.log(`Server is listenign at PORT${PORT}`);
});