/*
* 文件上传 只能用post
* 1. 表单  file   submit
* 2. ajax
*    input file  获取  files
*    var fd = new FormData();
*    fd.append(key,value)
*    xhr.send(fd)
*
* 3. 接受到上传数据后
*    formidata
**/
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var formidable = require('formidable');
/*
 * 创建一个服务器
 * */
var server = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url);
    switch (urlObj.pathname){
        case '/favicon.ico':
            res.end();
            return;
            break;
        case "/upload":
            //使用 formidable创建对象
            var formdata = new formidable.IncomingForm();
            //
            formdata.parse(req,function (error,filds,file) {
                var f = arguments[2]['files']
                if(!fs.existsSync('./upload')){
                    fs.mkdir('./upload');
                }
                var rs = fs.createReadStream(f.path);
                var ws = fs.createWriteStream('./upload/'+f.name);
                rs.pipe(ws);
                ws.on('close',function(){
                    console.log('end')
                    res.end('成功');
                });
                console.log('1111111')
            })

            break;
        case "/":
        case '/index.html':
            fs.createReadStream('./index.html').pipe(res);
            break;

        default:
            res.statusCode = 404;
            res.end('111');
    }
})
server.listen(8080);






