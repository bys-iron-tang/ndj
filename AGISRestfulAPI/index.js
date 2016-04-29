var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var multer=require('multer');
var router=require('./config.json');

app.get('/',function(req,res){
	res.send('Welcome to use AGIS restful API');
});

app.get('/api',function(req,res){
	 var path=req.path;

	 // console.log(req);
	 console.log("spend time for out");
	 console.log(req.path);
	 // console.log(JSON.stringify(req));

	 res.send(JSON.stringify(req.path));
});

app.post(router.routers.getAddressByAddressUri,function(req,res){
	 var path=req.path;

	 console.log(req);
	 console.log(req.path);
	 // console.log(JSON.stringify(req));

	 res.send('url  you can see');
});

var server=app.listen('8081',function(){
	var address=server.address().address;
	var port=server.address().port;
	// console.log(;
	console.log(server.address());
	console.log("instance is for http：//%s:%s",address,port);
})