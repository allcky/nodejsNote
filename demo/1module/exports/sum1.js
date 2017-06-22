function sum(){
	var [a,b] = arguments;
	return a+b;
}
var arr = [1,2,3];
function add (){
	return arr.push(...arguments);
}
exports.sum = sum;
exports.add = add;