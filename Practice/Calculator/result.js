const { buffer } = require("stream/consumers");

const sumRequestHandler = (req,res)=>{
console.llog("In sum Request Handler",req.url);
const body = [];
req.on('data',chunk =>body.push(chunk));
req.on('end', chunk =>{
const fullBody = Buffer.concat(body).toString();
const params = new URLSearchParams(fullBody);
const bodyObj = Object.fromEntries(params);
const result = bodyObj.first + bodyObj.second;
console.log(result);
});
}
exports.sumRequestHandler = sumRequestHandler;