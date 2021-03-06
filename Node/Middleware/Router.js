const express=require('express');
var app = express()
var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next)=> {
    console.log('Request URL:', req.originalUrl);
    next();
  });

router.all('/',(req,res)=>{
    res.send('routerlevel Middleware')
});

app.use('/',router);

app.listen(4000);

/*
output on console:
Request URL: /


output on browser:
routerlevel Middleware

*/
