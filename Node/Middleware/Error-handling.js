const express=require('express');
var app = express();
app.get('/',(req,res,next)=>{
    let err='error-handling middleware';
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!');
  });

  app.listen(4000);

/*
output on browser:
Something broke!

*/
