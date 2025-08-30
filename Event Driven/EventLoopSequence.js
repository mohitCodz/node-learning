console.log('1 Start of Script');

// Microtask queue (promise)
Promise.resolve().then(()=> console.log('2 Microtask'));

// Timer queue
setTimeout(()=>console.log('3. Timer'),0);

// I/O queue
const fs = require('fs');
fs.readFile('user-details.txt',()=>console.log('4.  I/O '));

// Check queue
setImmediate(()=>console.log('5 Intermediate'));

// Close queue
process.on('exit',(code)=>{
    console.log('6 Close queue');
});

console.log('Exit of the Script');