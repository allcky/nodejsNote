var fs = require('fs');

function copy(src,target){
    fs.readFile(src,function(err,data){
        if(err) throw err;
        fs.writeFile(target,data,function (err) {
            if (err) throw err;
        });
    });
}


copy('./1.md','./admin.md');