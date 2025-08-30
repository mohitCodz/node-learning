console.log('1 Start of Script');

// Microtask queue (promise)
Promise.resolve().then(()=> console.log('2 Microtask'));

// Timer queue
setTimeout(()=>console.log('3. Timer'),0);

// I/O queue
const.fs = require('fs');
fs.readFile('user-details.txt',()=>console.log('4.  I/O '));

