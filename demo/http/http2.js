const http = require('http');
const server = http.createServer(function(req,res){

    // res.write('hi'); //string buffer
    // res.write(Buffer.from('我的天!')); //Buffer.from()
    // res.end("结束了");


    function getDate(){
        var date = new Date();
        return [
            date.getFullYear(),
            date.getMonth()+1,
            date.getDate()
        ].join('-');
    }
    res.write((new Date()).toLocaleString()); //string buffer
    res.end();
})

server.listen(8080,function(){
    console.log("this server host  http://localhost:"+server.address().port )
})