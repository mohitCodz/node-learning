// showing and redirecting the user 
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // routing
  if (req.url.toLowerCase === "/") {
    res.write("<h1>Welcome to home page</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/men") {
    res.write("<h1>Welcome to men section</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/women") {
    res.write("<h1>Welcome to women section</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/kids") {
    res.write("<h1>Welcome to kids section</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/cart") {
    res.write("<h1>Welcome to your cart</h1>");
    return res.end();
  }

  // fallback page
  res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Amazon</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/men">MEN</a></li>
        <li><a href="/women">WOMEN</a></li>
        <li><a href="/kids">KIDS</a></li>
        <li><a href="/cart">CART</a></li>
      </ul>
    </nav>
  </body>
</html>`);
  res.end();
});

server.listen(3001, () => {
  console.log("Server is listening now");
});
