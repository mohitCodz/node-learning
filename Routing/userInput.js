const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body>");

    res.write('<form action="submit-details" meathod="POST">');
    //   res.write('<form action="/submitDetails" method="POST">');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="">');
    res.write('<label for="female">Female</label>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  // redirecting requests
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Submit</title></head>");
//   res.write("<body><h1>Thanks for Submitting Details</h1></body>");
//   res.write("</html>");
//   res.end();
});

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});
