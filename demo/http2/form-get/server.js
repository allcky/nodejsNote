var http = require('http');
var fs = require('fs');
var url = require('url');
var queryString = require('querystring');

var server = http.createServer(function (req,res) {
    var pathObj = url.parse(req.url);
    if(pathObj.pathname=='favicon.ico'){
        res.end();
        return;
    }

    if(pathObj.pathname=='/'||pathObj.pathname=='/index.html'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathObj.pathname=='/search'){
        var reqObj = queryString.parse(pathObj.query);
        console.log(reqObj)
        fs.readFile('./data.json',function (error,data) {
            data = JSON.parse(data.toString());
            for(var i=0;i<data.length;i++){
                if(data[i].name == reqObj.name){
                    res.end(data[i].name);
                    break;
                }
            }
            res.end("false");

        })
    }else{
        res.statusCode = 404;
        res.end('not found')
    }
})
server.listen(8000)