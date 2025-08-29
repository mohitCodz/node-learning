// sending response

const http = require('http');
const server = http.createServer((req,res)=>{
console.log(res);
});
const PORT = 30004;
server.listen(PORT,()=>{
console.log(`Server is listening at PORT ${PORT}`);
});