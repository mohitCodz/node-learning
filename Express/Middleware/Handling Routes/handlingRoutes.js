const app = express();
app.use('/',(req,res,next)=>{
console.log("Hello World");
res.send('<p>Welcome to submit details page</p>');
next();
});