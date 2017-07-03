var fs = require('fs');
var rs = fs.createReadStream('./a33.html',{
    'encoding':'utf8',
    "highWaterMark":10
});
//设置读取后数据编码方式 默认buffer
// rs.setEncoding('utf8')
rs.on('data',function (data) {
    console.log(rs.bytesRead)
    console.log(data)
});
rs.on('end',function () {
    console.log('end')
})
rs.on('error',function (error) {
    console.error(error)
})