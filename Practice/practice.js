const http = require('http');
const server =  http.createServer((req,res)=>{
console.log(req.url,req.method);
res.write(`<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Amazon</title>
  </head>
  <body>
    <head>
      <nav>
        <ul>
          <li><a href="/home">HOME</a></li>
          <li><a href="/men">MEN</a></li>
          <li><a href="/women">WOMEN</a></li>
          <li><a href="/kids">KIDS</a></li>
          <li><a href="/cart">CART</a></li>
        </ul>
      </nav>
    </head>
  </body>
</html>
    `);
    res.end();
});
server.listen(3001,()=>{
console.log('Server is listening now')
});