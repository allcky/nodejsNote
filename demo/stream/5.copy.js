var fs = require('fs');
function copy(src,target) {
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);
}

copy('./pms.zip','./pms-3.zip');