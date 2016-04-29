var oracledb=require('oracledb');
var dbconfig=require('./dbconfig.js');
oracledb.outFormat=oracledb.OBJECT;
console.log("test oracle connection");
console.log("Oracle client library version number is "+oracledb.oracleClientVersion);

oracledb.createPool(dbconfig,function(err,pool){
	pool.getConnection(function(err,connection){
		connection.execute("select \"AgencyName\" from \"Agency\"",function(err,result){
			if(err){
				console.log(err.message);
				return;
			}
			console.log(result.rows);
		})

		connection.release(function(err){
			if(err){
				console.log(err.message);
			}
		});
	});	

	// pool.release();
})

// oracledb.getConnection(
// 		{
// 			user : "agis12",
// 			password: "agis12",
// 			connectString:'dbs156m'
// 		},function(err,connection){
// 			if(err){console.log(err.message); return;}
// 			connection.execute("SELECT \"AgencyName\" FROM \"Agency\"",function(err,result){
// 				if(err){console.log(err.message);return;}
// 				debugger;
// 				console.log(result.rows);
// 			});
// 		}
// 	);