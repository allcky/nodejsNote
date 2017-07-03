var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
/*
* 创建一个服务器
* */
var server = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url);
    console.log(urlObj)
    switch (urlObj.pathname){
        case '/favicon.ico':
            res.end();
            return;
            break;
        case "/":
        case '/index.html':
            fs.createReadStream('./index.html').pipe(res);
            break;
        case "/main.html":
            fs.createReadStream('./main.html').pipe(res);
            break;
        case "/login":
            var str = "";
            req.on('data',function (data) {
                str += data.toString();
            })
            req.on('end',function(){
                var data = qs.parse(str);
                if(data.user=='admin'){
                    if(data.pwd=='12345'){
                        res.end("true");
                    }else{
                        res.end("false");
                    }
                }else{
                    res.end("false");
                }

            })
            break;
        default:
            res.statusCode = 404;
            res.end();
    }
})
server.listen(8080);