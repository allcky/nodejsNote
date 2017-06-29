// nodejs 事件驱动    js  DOM  click mousemove mouse over
var eventEmitter = require('events');
var e = new eventEmitter();
// e.setMaxListeners(12)


//订阅
e.addListener('say',function(a){
    console.log(a)
})
e.on('say',function(a){
    console.log('22222');
    e.removeListener('say',arguments.callee);
})

e.once('say',function(a){
    console.log('333333')
})

e.on('say',function(a){
    console.log('aaaaaaaaaaaaaa')
})
e.addListener('say',function(a){
    console.log('4444444')
})
e.addListener('say',function(a){
    console.log('4444444')
})
e.addListener('say',function(a){
    console.log('4444444')
})
e.addListener('say',function(a){
    console.log('4444444')
})
e.addListener('say',function(a){
    console.log('4444444')
})
e.addListener('say',function(a){
    console.log('4444444')
})
e.addListener('say',function(a){
    console.log('4444444')
})
e.addListener('run',function(){
    console.log('running')
})
// console.log(e.listeners('say'))
//发布

e.emit('say','aaa');
e.emit('say','aaa');
// var fns = e.listeners('say');
// fns.forEach((item)=>{
//     e.removeListener('say',item);
// })

// e.removeAllListeners()
e.emit('run')



console.log(eventEmitter.listenerCount(e,'say'))
console.log(e.listenerCount('say'))

