const app = express();
app.use('/',(req,res,next)=>{
console.log("Hello World");
res.send('<p>Welcome to submit details page</p>');
next(); // request will go the next middleware
});

app.use('/submit-details',(req,res,next)=>{
res.send('<p>Welcome to submit details page</p>');
});