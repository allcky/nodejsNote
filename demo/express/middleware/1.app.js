var express = require('express');
var app = new express();
app.use(function(req,res,next){
    req.ttt = +new Date();
    next();
})

app.get('/',function (req,res) {
    console.log(req.ttt)
    res.send('hello world!');
})

app.use(function(req,res,next){
    req.ttt = (function(){
        return new Date(req.ttt)
    })()
    next();
})
app.get('/about',function (req,res) {
    console.log(req.ttt)
    res.send('about!');
})

app.listen(4000)