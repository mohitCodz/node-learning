// creating first node server

const http = require('http');

// function requestListener(req,res){
//     console.log(req);
// }

http.createServer(function(req,res){
    console.log(req);
});