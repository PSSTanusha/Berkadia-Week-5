const express=require('express');
var app=express();

let middleware=(req,res,next)=>{
    console.log('Middleware is under execution');
    next();  
}

app.get('/',middleware,(req,res,next)=>{
      console.log('executed');
});

app.listen(4000);