var fs = require('fs');
// fs.mkdir('images',function (err) {
//     // console.log(err)
//     if(err) throw err;
// })
// console.log('end');


/*
* 需求：创建 img 文件夹  在img中创建 index 和 admin
* 思路：1. 创建img
*       2. 再创建index 和 admin
*
* */

/*
* 实现方式1 
* 创建文件夹的时候，父级目录必须存在
* */


// fs.mkdir('images/index',function (err) {
//     console.log(err)
// })
// console.log('end');


/*
 * 实现方式2
 * 创建文件夹的时候，父级目录必须存在
 * */

// fs.mkdir('images',function (err) {
//     if(err) throw err;
//     fs.mkdir('images/index',err=>{
//         if (err) throw err;
//     })
//     fs.mkdir('images/admin',err=>{
//         if (err) throw err;
//     })
// })
// console.log('end');

/*
 * 实现方式3
 * 创建文件夹的时候，父级目录必须存在
 * 结合 fs.existsSync(path)
 * */

if(!fs.existsSync('images')){
    fs.mkdir('images');
}else{
    if(!fs.existsSync('images/index')){
        fs.mkdir('images/index');
    }
    if(!fs.("images/admin")){
        fs.mkdir('images/admin');
    }
}
console.log('end')

fs.writeFile('images/index/admin.log','文件创建成功',function(err){
    if(err) throw err;
})

