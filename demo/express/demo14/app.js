var express = require('express');
var app = new express();
function c1(req,res,next){
    console.log('c1');
    next();
}
function c2(req,res,next) {
    console.log('c2');
    next();
}
function c3(req,res) {
    console.log('c3');
    res.send('最后一个')
}

app.get('/',[c1,c2,c3]);
app.listen(3000)
