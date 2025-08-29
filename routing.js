// 
const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
if(req.url === '/'){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Node.js</title></head>');
res.write('<body><h1>Welcone to HOME page !</h1></body>');
res.write('</html>');
return res.end();
}else if( req.url === '/products'){
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Node.js</title></head>');
res.write('<body><h1>Sorry Currently no products are available to display</h1></body>');
res.write('</html>');
return res.end(); // returning
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Node.js</title></head>');
res.write('<body><h1>Come back again!</h1></body>');
res.write('</html>');
res.end();
});

const PORT = 30005; // port 30005
server.listen(PORT,()=>{
 console.log(`Server is listening at PORT ${PORT}`);
});