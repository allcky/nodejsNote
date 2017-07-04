var express = require('express');
var app = new express;
//静态资源处理
app.use(express.static('static'));
//localhost:4000/css/a.css
app.use('/public',express.static('resss'));
// localhost:4000/public/css/b.css
//路由处理
app.get('/',function(req,res){
    //调用那个模型
    //渲染到那个视图
})
//模板
app.listen(4000)