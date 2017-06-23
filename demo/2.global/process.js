// 查看当前文件的所在目录
// console.log(process.cwd());

// process.chdir("../1module");
//
// console.log(process.cwd());
//
// var a = require(process.cwd()+'/a.js');
// console.log(a)


//# 获取内存使用情况
// console.log(process.memoryUsage());

/*
heapTotal代表已申请到的堆内存，heapUsed当前使用的内存，rss(resident set size)进程的常驻内存(单位字节byte)。
1byte =8bit
1kb = 1024byte
1mb = 1024kb
1gb = 1024mb
*/
// setTimeout(function(){
//     console.log(process.uptime() )
// },2000)
//
// console.log(process.platform);
//
// console.log(process.version);
//
// console.log(process.versions);
"use strict"
// var a = 0;
// var t = setInterval(function(){
//     a++;
//     console.log(a);
//     if(a>10){
//         clearInterval(t);
//     };
// },1000);

// console.log(1);
// setTimeout(function(){
//     console.log(2);
// },2000);
// console.log(3);


// console.log(1);
// setTimeout(function(){
//     console.log(2);
// },0);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
//
// setTimeout(function(){
//     console.log('a');
// },0);
// console.log(1);
//
// setImmediate(function(){
//     console.log(2);
// });
//
//
// process.nextTick(function(){
//     console.log(3);
// })
//
// console.log(4);

/*
*
*  nextTick() ==> setTimeout(,0) ==>setImmediate
* */

console.log(__filename);
console.log(__dirname);

