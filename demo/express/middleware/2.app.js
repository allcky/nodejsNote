var express = require('express');
var app = new express();
//国家   money
app.use(function (req,res,next) {
    req.money = 1000;
    next();
})
//省里
app.use(function (req,res,next) {
    req.money = req.money- 500;
    next();
})
//市里
app.use(function (req,res,next) {
    req.money = req.money - 200;
    next();
})
app.get('/aaa',function(req,res){
    res.send(req.money.toString())
})
//县里
app.use(function (req,res,next) {
    req.money = req.money - 100;
    next();
})

//村里
app.use(function (req,res,next) {
    req.money = req.money*0.99;
    next();
})

app.get('/',function(req,res){
    res.send(req.money.toString())
})

app.listen(9999)
