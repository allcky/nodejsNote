var crypto = require('crypto');
var hmac = crypto.createHmac('sha1','334342');
hmac.update('12345');
console.log(hmac.digest('hex'))