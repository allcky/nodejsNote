var fs = require('fs');

var data1 = fs.readFileSync('./test2.txt');
// console.log(data.toString()+data1.toString())

// console.log(data);
// console.log(data1);

try {
    var data = fs.readFileSync('./test222.txt','utf8');
    console.log(data);
}catch (error){
    // console.error(error);
}

console.log(111)