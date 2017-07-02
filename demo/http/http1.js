const http = require('http');
const server = http.createServer(function (req,res) {
    //req 获取客户端请求
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);

    //res 服务器端响应
    // console.log(res);
    res.write('this is http server');
    res.end();
});
server.listen(8080,function(){
    console.log('this web server port is '+server.address().port);
});