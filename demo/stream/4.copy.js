var fs = require('fs');

function copy(src,target) {
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(target);
    rs.on('data',function (data) {
        console.log(data);
        ws.write(data);
    });
}

// copy('./content.txt','./a.txt')

copy('./pms.zip','./aaa/pms-2.zip');