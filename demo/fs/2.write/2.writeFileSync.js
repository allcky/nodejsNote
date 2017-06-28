var fs = require('fs');
console.log(111)
var err = fs.writeFileSync("./hello.txt","nihao",{flag:'r'});

console.log(err)
var err2 = fs.writeFileSync('./hello.txt','haha',{flag:'a'});
console.log(err2)