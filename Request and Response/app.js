const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
});

const PORT = 30003; // port number 3003
server.listen(PORT()=>{
console.log()
})