console.log('1 Start of Script'); // display 1st 

// Microtask queue (promise)
Promise.resolve().then(()=> console.log('2 Microtask')); // display 3rd

// Timer queue
setTimeout(()=>console.log('3. Timer'),0); // display 4rd

// I/O queue
const fs = require('fs');
fs.readFile('user-details.txt',()=>console.log('4.  I/O ')); // display 6th

// Check queue
setImmediate(()=>console.log('5 Intermediate')); // display 5th
 
// Close queue
process.on('exit',(code)=>{
    console.log('6 Close queue'); // display 7th
});

console.log('Exit of the Script'); // display 2nd