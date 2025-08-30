const requestHandler = (req,res) =>{
console.log(req.url,req.method);
if(req.url === '/'){
    res.setHeader('Content-type','text/html');
    res.write('<html>');
res.write('<head><title>Calculator</title></head>');
res.write('<body><h1>Welcome to simple Calculator</h1></body>');
res.write('</html>');
}
}
exports.requestHandler = requestHandler;