var express = require('express');
var app = new express();

app.set('views','./views'); //设置模板目录
app.set('view engine','html'); //设置模板后缀名
app.engine('html',require('ejs').renderFile); //用ejs解析后缀为html的模板

app.get('/',function (req,res) {
    res.render('index',{title:'nodejs学习',content:'nodejs是一个基于v8引擎的平台'});
})
app.get('/login',function (req,res) {
    res.render('login')
})
app.listen(5555)