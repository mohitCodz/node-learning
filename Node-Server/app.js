// creating first node server

const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req);
});
const PORT = 3001;
server.listen(prototype,()=>{
    console.log(`Server running at http://:localhost:${PORT}`);
});