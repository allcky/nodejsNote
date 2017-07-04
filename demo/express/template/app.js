var express = require('express');
var app = new express();

app.set('views','./views');
app.set('view engine','jade');
app.get('/',function (req,res) {
    res.render('index',{title:'nodejs学习',content:'nodejs是一个基于v8引擎的平台'});
})

app.listen(5555)