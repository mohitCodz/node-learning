// parsing chunks

const fs = require('fs'); // file write
const { buffer } = require('stream/consumers');
// creating a handler to handle the use request
const requestHandler = ((req, res) => {
  console.log(req.url, req.method,);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write("<body>");

    res.write('<form action="/submit-details" method="POST">');
    //   res.write('<form action="/submit-Details" method="POST">');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label>');
    res.write('<br><button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } 
  // redirecting requests
  else if(req.url.toLowerCase() === "/submit-details" && req.method === "POST"){
    // reading Chunks
    const body = []; // array
    req.on('data', chunk=>{
        console.log(chunk);
        body.push(chunk); // adding data to array -from end
    });
    req.on('end',()=>{
        const fullData = Buffer.concat(body).toString(); // Buffer.concat joins all chunks togeather
        console.log(fullData); 
        //parsing chunks
        const params = new URLSearchParams(fullData);
        // const bodyObject ={};
        // for(const [key,value] of params.entries()){
        //     bodyObject[key] = value; // storing value at bodyObject
        // }
        const bodyObject = Object.fromEntries(params); // simple and short way to create object
        console.log(bodyObject);
            fs.writeFileSync('user-details.txt',JSON.stringify(bodyObject)); // writing in the file
    });

    res.statusCode = 302; // status code 
    res.setHeader('Location','/'); // home page redirection
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Submit</title></head>");
  res.write("<body><h1>Thanks for Submitting Details</h1></body>");
  res.write("</html>");
  res.end();
});

