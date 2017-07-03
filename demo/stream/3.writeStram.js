var fs = require('fs');
var ws = fs.createWriteStream('./content.txt',{
    flags:'r'
});
//ws.write(data,encoding,callback)
ws.on('drain',function(){
    console.log(111);
})
ws.on('close',function () {
    console.log('close');
})
var a = ws.write('西安',function(){
    console.log('end1')
})
console.log(a)
ws.write('优逸客',function () {
    console.log('end2')
})
ws.end('有限公司',function () {
    console.log('end3')
})