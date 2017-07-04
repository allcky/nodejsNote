var express = require('express');
var app = new express();
var indexRouter = require('./route/index');
var adminRouter = require('./route/admin');
var loginRouter = require('./route/login');
app.use(function (req,res,next) {
    console.log(new Date());
    next();
})

// 首页 /  /about  /concatus  /lists
app.use('/',indexRouter);
// 后台页面  /admin/     /admin/user   /admin/category  /admin/article
/*
*  localhost/admin/
*  localhost/admin/category
*  localhost/admin/user
*  localhost/admin/article
* */
app.use('/admin',adminRouter);
// 登陆注册  /login.js/    /login.js/reg
app.use('/login',loginRouter);

app.listen(8887)

