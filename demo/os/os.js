var os = require('os');
// console.log(os.tmpdir())
// console.log(os.endianness())
console.log(os.hostname())
console.log(os.type())
console.log(os.platform())
// console.log(os.uptime()/60/60)
// setInterval(()=>{
//     console.log(os.uptime()/(60*60*24))
// },1000)

console.log(os.totalmem())
console.log(os.freemem()/1024/1024/1024)


