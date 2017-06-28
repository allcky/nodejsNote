var fs = require('fs');

//嵌套
// fs.readFile('./test.txt',function(error,data1){
//     console.log(data1);
//     fs.readFile('./test2.txt',function(error,data2){
//         console.log(data2) ;
//         var data = Buffer.concat([data1,data2]);
//         console.log(data.toString()) ;
//     });
// });

//计数
var dataAll = [];
function show(){
    var str = "";
    if(dataAll.length==2){
        for(var i in dataAll){
           str+= dataAll[i].toString();
        }
    }
}
fs.readFile('./test.txt',function(error,data){
    dataAll.push(data);
    show();
})
fs.readFile('./test2.txt',function(error,data){
    dataAll.push(data);
    show();
})

