var url = require('url');
var queryString = require('querystring');
var urls = "http://localhost:8888/start?foo=bar&hello=world";
var urlObj= url.parse(urls);

console.log(queryString.parse(urlObj.query))
var attrObj = queryString.parse(urlObj.query);
attrObj.name = "zhangsan"

console.log(queryString.stringify(attrObj))

urlObj.search = '?'+queryString.stringify(attrObj);
console.log(urlObj)
console.log(url.format(urlObj))
// console.log(urlObj)
// console.log(urlObj.query)
// console.log(url.format(urlObj));


// var src = "https://free-api.heweather.com/v5/";


// console.log(url.resolve(src,'\\weather'+'?city=yourcity&key=yourkey'))








