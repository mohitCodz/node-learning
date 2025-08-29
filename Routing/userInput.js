const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
if(req.url === '/')
    res.write("<h1>Welcome to Home Page</h1>")
});

const PORT = 5000;
server.listen = (PORT,()=>{
    console.log(`Server is listening at PORT ${PORT}`);
});