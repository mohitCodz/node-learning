const { buffer } = require("stream/consumers");

const sumRequestHandler = (req,res)=>{
console.log("In sum Request Handler",req.url);
const body = [];
req.on('data',chunk =>body.push(chunk));
req.on('end', chunk =>{
const fullBody = Buffer.concat(body).toString();
const params = new URLSearchParams(fullBody);
const bodyObj = Object.fromEntries(params);
const result = Number(bodyObj.first) + Number(bodyObj.second);
console.log(result);
 res.setHeader('Content-type', 'text/html');
    res.write(`
        <html>
<head><title>Calculator</title></head>
<body>
<h1>Your result is ${result}</h1>
<a href="/">Home Page</a>
</body>
</html>`
    );
    return res.end();
});

}
exports.sumRequestHandler = sumRequestHandler;