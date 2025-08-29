const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Form</title></head>');
    res.write('<body><h1>Enter your details</h1>');
    res.write('</body>');
    res.write('<form>');
    res.write()
    res.write('</html>');
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js</title></head>");
  res.write("<body><h1>Come back again!</h1></body>");
  res.write("</html>");
  res.end();
    if (req.url === "/") res.write("<h1>Welcome to Home Page</h1>");
  
});

const PORT = 5000;
server.listen =
  (PORT,
  () => {
    console.log(`Server is listening at PORT ${PORT}`);
  });
