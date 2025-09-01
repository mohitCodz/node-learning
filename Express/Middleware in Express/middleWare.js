// adding middleware
app.use((req,res,next)=>{
    console.log("First Middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("Second Middleware");
});

