const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
});

const PORT = 5000;
server.listen = (PORT,()=>{
    console.log(`Server is listening at PORT ${PORT}`);
});