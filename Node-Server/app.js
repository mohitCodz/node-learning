// creating first node server

const http = require('http');

// function requestListener(req,res){
//     console.log(req);
// }
//using 
const server = http.createServer((req,res)=>{
console.log(req);
});
// server is listening at port number 3000
server.listen(3000);