var express = require('express');
var app = new express();

app.get('/',function(req,res){
    res.send('hello world!');
});
app.post('/',function(req,res){
    res.send('post 首页')
})
app.put('/',function(req,res){
    res.send('新增一个内容')
})
app.delete('/',function (req,res) {
    res.send('删除一个内容')
})
app.all('/aaa',function(req,res){
    res.send('all aaaaa')
})
app.get('/login.js',function (req,res) {
    res.send('登陆')
})
app.get('/reg',function (req,res) {
    res.send('注册')
})

var server = app.listen(3000,function () {
    var port = server.address().port;
    var host = server.address().address;

    console.log('当前服务器的访问地址为 http://%s:%s',host,port);
})


