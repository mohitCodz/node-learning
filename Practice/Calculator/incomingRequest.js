const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write(`
        <html>);
<head><title>Calculator</title></head>
<body><h1>Welcome to simple Calculator</h1></body>
</html>`
        );
    }
}
exports.requestHandler = requestHandler;