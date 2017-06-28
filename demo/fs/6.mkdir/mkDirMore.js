const fs = require('fs');

var path = "files/20170628/txt/a.txt";
mkDirs(path,'11111111111')
/*
* 1. 路径分割  split => []
* 2. 一级一级创建
* 3. 存在 不创建
*         不存创建
* 4. 判断是否为文件   函数 getExt()  return true  false
* */
function mkDirs(path,data="") {
    var paths = path.split('/');
    var newPath = [];
    paths.forEach((p,i)=>{
        newPath.push(p);
        console.log(newPath)
        if(!fs.existsSync(newPath.join('/'))){
            if(getExt(newPath.join('/'))){
                fs.writeFile(newPath.join('/'),data)
            }else{
                fs.mkdir(newPath.join('/'))
            }
        }else{
            if(getExt(newPath.join('/'))){
                fs.writeFile(newPath.join('/'),data)
            }
        }
    })
}

function getExt(path){
    return /\.\w+$/.test(path)
}