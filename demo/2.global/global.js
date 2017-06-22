// console.time('a');
// var a = 100;
// console.log(a);
// global.a = 200;
//
//
// console.timeEnd('a')

// console.log(',把电风%s扇地方 %d,%j','hello world',1000,{name:'Bill Gate',Sexy:'Male',age:18,product:['xp','win7','win8']});

console.time('timer1');
for(var i=0;i<10000000;i++)
{
    if(i%2==0)
    {
    }
}
console.timeEnd('timer1');

console.assert(1==22,'if equal are wrong');