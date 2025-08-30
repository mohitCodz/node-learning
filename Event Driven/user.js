const fs = require('fs');
console.log('1 -> Start the Script ');

// Synchronous (blocking) system
console.log('2 -> Reading file Synchronously');
const datasync = fs.readFileSync('user-details.txt','utf8');
console.log('3 -> Synchronous read complete');