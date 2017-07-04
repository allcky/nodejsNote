var express = require('express');
var app = new express();

app.set('views','./views');
app.set('view engine','ejs');
app.get('/',function (req,res) {
    res.render('index',{title:'nodejs学习',content:'nodejs是一个基于v8引擎的平台'});
})
app.get('/login',function (req,res) {
    res.render('login')
})
app.listen(5555)