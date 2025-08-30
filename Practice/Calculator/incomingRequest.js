const { sumRequestHandler } = require('./result');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-type', 'text/html');
        res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body>
            <h1>Welcome to Simple Calculator</h1>
            <a href="/calculator">Go to Calculator</a>
        </body>
        </html>
        `);
        return res.end();
    } 
    
    else if (req.url.toLowerCase() === "/calculator" && req.method === 'GET') {
        res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body>
            <h1>Calculate anything</h1>
            <form action="/calculate-result" method="POST">
                <input type="text" placeholder="First Number" name="first">
                <input type="text" placeholder="Second Number" name="second">
                <input type="submit" value="Sum">
            </form>
        </body>
        </html>`);
        return res.end();
    } 
    
    else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
        return sumRequestHandler(req, res);
    }

    // 404 page
    res.setHeader('Content-type', 'text/html');
    res.write(`
        <html>
        <head><title>Calculator</title></head>
        <body>
            <h1>404 - Page Not Found</h1>
            <a href="/">Home Page</a>
        </body>
        </html>
    `);
    return res.end();
};

exports.requestHandler = requestHandler;
