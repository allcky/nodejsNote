var util = require('util');
// console.log(util);


var str = "hi";
var num = 10000;
var bool = true;
var undf;
var obj = null ;
var object = {};
var arr = [];

// c(util.isArray(str))

// c(util.isObject(arr))
// c(util.isArray(arr))
// c(util.isObject(obj))
//
// function parent(){
//     this.name ="aaa";
// }
// parent.prototype.say = function(){
//     console.log(this.name);
// }
//
// function child(){
//     this.age = 100;
//     this.name = '123123123'
// }
// util.inherits(child,parent);
//
// var o = new child();
// o.say();
var o = {a:123,b:456,c:{aa:'aa',bb:{cc:'12313'}}}
c(o)
c(util.inspect(o))
function c(a){
    console.log(a)
}