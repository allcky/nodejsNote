var fs = require('fs');
// fs.writeFile('./a.txt',"hello",function(err){
//     console.log(err);
// })
fs.writeFile('./a.txt','你好',{flag:'a'},function (err) {
    console.log(err)
})
fs.readFile('./a.txt',{flag:'r'},function (error,data) {
    console.log(data)
})