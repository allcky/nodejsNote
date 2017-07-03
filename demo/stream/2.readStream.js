var fs = require('fs');
var rs = fs.createReadStream('./a.html',{highWaterMark:10});
rs.on('data',function(data){
    rs.pause();
    setTimeout(()=>{
        console.log(data);
        rs.resume();
    },1000)
})
rs.on('end',function () {
    console.log('end')
})