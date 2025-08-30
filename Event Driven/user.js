const { error } = require('console');
const fs = require('fs');
console.log('1 -> Start the Script ');

// Synchronous (blocking) system
console.log('2 -> Reading file Synchronously');
const datasync = fs.readFileSync('user-details.txt','utf8');
console.log('3 -> Synchronous read complete');

// Asynchronous (non-blocking) operation
console.log('4 -> Reading asynchronously');
fs.readFileSync('user-details.txt','utf8',(err,dataAsync) =>{
if (err) throw error;
console.log('6 -> Synchronous read complete');
});

console.log('5 -> End of Scipt');