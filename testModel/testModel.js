var name;
exports.setName=function(fName){
	name=fName;
};
exports.sayHello=function(){
	console.log('Hi' +name);
	console.log(__filename);
};