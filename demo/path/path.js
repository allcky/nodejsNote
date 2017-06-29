var path = require('path');
var p1 = path.normalize("images/1231/bcd/..");

// admin

// var newpath = path.join(p1,'admin/qq/pp/../aa');
//
// console.log(p1+path.sep+'admin/qq/pp/../aa');
// console.log(newpath)



// console.log(path.resolve())
// console.log(__dirname)



// if(path.isAbsolute(path.resolve(p1))){
//     console.log('是绝对路径');
// }else{
//     console.log('不是绝对路径');
// }

// var current = __dirname;
// console.log(path.relative(__dirname,'../fs/2.write'))
// console.log(path.relative(__dirname,'./component'))


var fileName = __filename;
console.log(fileName)

console.log(path.dirname(fileName)) //
console.log(path.basename(fileName))
console.log(path.extname(fileName))


console.log(path.parse(fileName))
var pathObj = path.parse(fileName);
var obj = {
    dir: 'D:\\Desktop\\WUIW1610-2\\nodejsNote\\demo\\path',
    ext: '.js',
    name: 'path'
}
console.log(path.format(obj))
console.log(format(obj))
function format(pathobj){
    if("dir" in pathobj){
        if('base' in pathobj){
            return path.join(pathobj.dir,pathobj.base);
        }else if('ext' in pathobj && 'name' in pathobj){
            return path.join(pathobj.dir,pathobj.name+pathobj.ext);
        }else{
            return path.join(pathobj.dir,path.sep);
        }
    }else{
        console.log(2);
        return "";
    }
}