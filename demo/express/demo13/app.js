var express = require('express');
var app = new express();
var path = require('path');
app.use(express.static('static'));
app.get('/',function (req,res) {
    res.sendFile(path.resolve(__dirname,'index.html'))
});
app.get('/list',function (req,res) {
    res.sendFile(path.resolve(__dirname,'list.html'))
})
app.get('/login.js',function (req,res) {
    res.sendFile(path.resolve(__dirname,'login.js.html'))
})

app.listen(5000)