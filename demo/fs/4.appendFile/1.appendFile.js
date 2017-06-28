var fs = require('fs');
fs.appendFile('./a.txt','一粒沙子',function (err) {
    console.log(err)
})