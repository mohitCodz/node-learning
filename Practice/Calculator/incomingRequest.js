const { sumRequestHandler } = require('./result');
const requestHandler = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write(`
        <html>
<head><title>Calculator</title></head>
<body>
<h1>Welcome to simple Calculator</h1>
<a href="/calculator">Go to Calculator</a>
</body>
</html>`
        );
        return res.end();
    }
    else if (req.url.toLowerCase() === "/calculator") {
        res.write(`
        <html>
<head><title>Calculator</title></head>
<body>
<h1>Calculate anything</h1>
<form action="calculate-result" meathod = "POST">
<input type ="text"  placeholder = "First Number" name = "First">
<input type ="text"  placeholder = "Second Number" name = "Second">
<input type ="submit" value = "Sum">
</form>
</body>
</html>`);
        return res.end();
    }
    else if (req.url.toLowerCase === "./calculate-result" && req.method == "POST") {
        sumRequestHandler(req, res);
    }
    res.setHeader('Content-type', 'text/html');
    res.write(`
        <html>
<head><title>Calculator</title></head>
<body>
<h1>404-Page not found</h1>
<a href="/">Home Page</a>
</body>
</html>`
    );
    return res.end();
}
exports.requestHandler = requestHandler;