// console.log("Hello World ! \nI am learning Node.js Now !!!!!!1");

const fs = require('fs');

// defining two variables
let a =20;
let b = 20;

// simple arithmatic operations
let sum = a + b;
let product = a * b;

// prepare data to write 
let result = `Sum: ${sum}\n Product:${product}`;
console.log(result); // displaying the result 

// writing data to the local file 
fs.writeFile('output.txt',result,(err)=>{
    if(err) throw err; // throwing the error;
    console.log('Data is sucessfully written to the file');
});