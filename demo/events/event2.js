var eventEmitter = require('events');

function person(){
    this.name = "zhangsan";
}
person.prototype = new eventEmitter;


var a  = new person();
a.addListener('say',function(){
    console.log(this.name);
})


a.emit('say');