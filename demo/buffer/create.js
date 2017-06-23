// var buf = Buffer.from([1,2,22323]);
// console.log(buf.toJSON().data);
//
// var buf = Buffer.from("hello",'Base64');
// console.log(buf)
//
// console.log(buf.values())
//
// for(var v of buf.values() ){
//     console.log()
// }


// var buf = Buffer.alloc(10,11,'hex');
// console.log(buf);


// var buf = Buffer.from("a",'utf8');
//
// console.log(buf);
//
// console.log(buf.toString());


var buf1 = Buffer.from('hello');
var buf2 = Buffer.from("world");
var newBuff = Buffer.concat([buf1,buf2]);
console.log(newBuff.toString())