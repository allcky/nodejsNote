const http = require('http');
const server = http.createServer(function(req,res){
    // res.setHeader 必须要在发送之前
    // write方法可以写多个，并且参数只能为string buffer
    // res.writeHead(404,{'Content-type':'text/html'})
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.write('this is a httpserver')
    setTimeout(()=>{
        res.write("<h1>Hello !</h1>");
        res.end(); //end 也可以发送数据
    },2000);

})
server.listen(8080);