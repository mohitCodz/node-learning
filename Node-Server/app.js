// creating first node server

const http = require('http');

// function requestListener(req,res){
//     console.log(req);
// }
//using 
const server = http.createServer((req,res)=>{
console.log(req);
});
// server is listening
server.listen(3000);