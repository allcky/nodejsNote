var crypto = require('crypto');
//md5
// var md5 = crypto.createHash('md5');
// var password = "h2iier8sd3333";
// md5.update(password)
// var pwd = md5.digest('hex');
// console.log(pwd)


// var sha1 = crypto.createHash('sha1');
// var password = "h2iier8sd3333";
// sha1.update(password)
// var pwd = sha1.digest('hex');
// console.log(pwd)


var hmac = crypto.createHmac('sha1','uek');
hmac.update('12345');

console.log(hmac.digest('hex'))

