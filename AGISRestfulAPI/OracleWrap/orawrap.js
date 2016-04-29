var oracledb=require("oracledb");
var PoolManager=require("./poolManager");
var ConnectionManger=require("./connectionManager");

function Orawrap(){
  
  this.poolManager=new PoolManager();
  this.connectionManager=new ConnectionManger(this.poolManager);
};

Orawrap.prototype.createPool=function(config,cb){
	return this.poolManager.createPool.apply(this.poolManager,arguments);
};

Orawrap.prototype.terminatePool=function(poolName,cb){
	return this.poolManager.terminatePool.apply(this.poolManager,arguments);
};

Orawrap.prototype.getPool=function(){
	return this.poolManager.terminatePool.apply(this.poolmanager,arguments);
};


module.exports=Orawrap;