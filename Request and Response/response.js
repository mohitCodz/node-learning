// sending response

const http = require('http');
const server = http.createServer((req,res)=>{
res.setHeader('Content-Type', 'text/html');
res.write('<html');
res.write('<head>')
res.write('/html');
});
const PORT = 30004;
server.listen(PORT,()=>{
console.log(`Server is listening at PORT ${PORT}`);
});