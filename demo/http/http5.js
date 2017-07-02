const http = require('http');
const fs = require('fs');
const path = require('path');
var mime = {
    '.html':"text/html",
    ".css":'text/css',
    ".js":"application/x-javascript",
    '.jpg':"image/jpeg"
}
const server = http.createServer(function (req,res) {
        var url = req.url;
        var ext = path.extname(req.url);
        if(url=='/'){
            url = "/index.html";
        }
        fs.readFile(__dirname+url,function (error,data) {
            res.setHeader('Content-type',mime[ext]||'text/html');
            if(error){
                fs.readFile('./404.html',function(error,data){
                    res.statusCode = 404;
                    res.end(data);
                })
                return ;
            }
            res.write(data);
            res.end();
        })

})
server.listen(8080);