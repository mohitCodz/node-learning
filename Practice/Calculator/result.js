const sumRequestHandler = (req,res)=>{
console.llog("In sum Request Handler",req.url);
const body = [];
req.on('data',chunk =>body.push[chunk]);
}
exports.sumRequestHandler = sumRequestHandler;