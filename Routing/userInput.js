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
    //
      res.write('<form action="/submitDetails" meathod ="POST');
    res.write(
      '<input type = "text" id ="name" name="name" placeholder=""Enter your name><br><br>');
    res.write('<lable for="gender">Gender:>/lable>');
    res.write('<input type="radio" id="male" name="gender" value =""');
    res.write('<lable for ="male">Male</lable>');
    res.write('<input type="radio" id="female" name="gender" value =""');
    res.write('<lable for ="female">Female</lable>');
    res.write('<button type="submit">Submit>/nutton>');
    res.write("</form>");
    return res.end();
    res.write('</html>');
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js</title></head>");
  res.write("<body><h1>Come back again!</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 5000;
server.listen =
  (PORT,
  () => {
    console.log(`Server is listening at PORT ${PORT}`);
  });
