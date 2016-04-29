var express=require('express');
var app=express();
var fs=require('fs');

var bodyparser=require('body-parser');
var multer=require('multer');

app.use(express.static('public'));

app.use(bodyparser.urlencoded({extended:false}));
app.use(multer({dest:'/temp/'}).array('image'));

app.get('/',function(req,res){
	res.send("Helooo!");
});

app.get('/index.htm',function(req,res){
	console.log(__dirname+"/"+"index.htm");
	res.sendFile(__dirname+'/'+"index.htm");
})

app.post('/file_upload',function(req,res){
	console.log(req.files[0]);

	var des_file=__dirname+"/"+req.files[0].originalname;
	
	fs.readFile(req.files[0].path, function(err,data){
		fs.writeFile(des_file,data,function(err){
			 if(err){
			 	console.log(err);
			 }else{
			 	response={
			 		message:'File uploaded successful',
			 	    filename:req.files[0].originalname
			 	};

			 }
			 
			 console.log(response);
			 res.end(JSON.stringify(response));

		})
	});
})

var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
 	console.log(host);
 	console.log(port);
	console.log("instance is for http：//%s:%s",host,port);

})