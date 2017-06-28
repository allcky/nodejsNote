var fs = require('fs');
fs.unlink('./a.txt',function (err) {
    if(err) throw err;
})

fs.unlinkSync('./b.txt');