const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req,res) {
    console.log(req.url)

    if(req.url=='/'||req.url=='/index.html'){
        res.setHeader('Content-type','text/html');
        fs.readFile('./index.html',function (error,data) {
            if(error){
                res.statusCode = 404;
                res.end('Not Found this file');
                return ;
            }
            res.write(data);
            res.end();
        })
    }else if(req.url =='/index.css'){
        res.setHeader('Content-type','text/css');
        fs.readFile('./index.css',function (error,data) {
            if(error){
                res.statusCode = 404;
                res.end('Not Found this file');
                return ;
            }
            res.write(data);
            res.end();
        })
    }else{
        fs.readFile('./404.html',function (error,data) {
            res.setHeader('Content-type','text/html');
            res.statusCode = 404;
            res.write(data);
            res.end();
        })
    }

})
server.listen(8080);