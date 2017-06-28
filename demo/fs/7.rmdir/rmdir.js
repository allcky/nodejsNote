var fs = require('fs');

function rmdir(path){
    if(!fs.existsSync(path)){
        return "文件夹不存在";
    }
    var lists = fs.readdirSync(path);
    if(lists.length==0){
        fs.rmdir(path);
    }else{
        // ['index','admin','admin.log']
        lists.forEach(function(p,i){
            var stats = fs.statSync(path+'/'+p);
            if(stats.isDirectory()){
                rmdir(path+'/'+p);


            }else{
                fs.unlink(path+'/'+p);
            }
        })
        fs.rmdir(path);
    }
}

rmdir('images')

