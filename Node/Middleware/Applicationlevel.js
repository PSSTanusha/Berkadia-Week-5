const express=require('express');
var app=express();

let middleware=(req,res,next)=>{
    console.log('Middleware is under execution');
    next();  
}

app.get('/',middleware,(req,res,next)=>{
      res.send('executed');
});

app.listen(4000);

/*
on console

output:
Middleware is under execution

on browser

output:
executed

*/
