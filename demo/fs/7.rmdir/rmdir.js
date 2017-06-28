var fs = require('fs');
// fs.rmdir('images',function (err) {
//     if(err) throw err;
// })
fs.readdir('images',function (err,stat) {
    console.log(stat)
    stat.forEach((elm,index,array)=>{
        fs.stat("images/"+elm,function(error,stats){
            console.log(stats)
            // console.log(arguments)
            console.log(stats.isFile())
            console.log(stats.isDirectory())
        })
    })

})