// Creating Server
const http  = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
});

const PORT = 5009; // Port number
server.listen(PORT,()=>{
console.log(`Server is listening at ${PORT}`);
});