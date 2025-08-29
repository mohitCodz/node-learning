// sending response

const http = require('http');
const server = http.createServer((req,res)=>{
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Node.js</title></head>');
res.write('<body><h1>Keep Coding ! Keep Building Logics</h1></body>');
res.write('</html>');
res.end();
});
const PORT = 30004;
server.listen(PORT,()=>{
console.log(`Server is listening at PORT ${PORT}`);
});