var http=require("http");
var url=require("url");
var express=require('express');
var app=express();
app.use(express.static('public'));

app.get('/index.htm',function(req,res){
	res.sendFile(__dirname+"/"+"index.htm");
});

app.get("/",function(req,res){
	res.send("wow!");
});

app.get("/process_get",function(req,res){
	response={
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};

	console.log(response);
	res.send(JSON.stringify(response));

	// res.send("asdf! Hel");
});

var server=app.listen(8888,function(){
			var host= server.address().address;
			var port=server.address().port;

			console.log("Test instance:",host,port);

	});



function start(){
	console.log("start!");
	console.log(express.static('public'));
	// function onRequest(request,response){
	// 	debugger;
	// 	var pathName=url.parse(request.url).pathname;
	// 	console.log("Request for "+pathName+ " Received.");
	// 	response.writeHead(200,{"Content-Type":"text/plain"});
	// 	response.write("Hello Iron Tang");

	// 	response.end();

	// }

	// http.createServer(onRequest).listen(8888);
	//console.log("My Test Server has been started 1");
}

exports.start=start;