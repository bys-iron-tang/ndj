var oracledb=require("oracledb");
var Promise=require("es6-promise").Promise;
var async=require("async");

function PoolManager(){
	this._poolMap={};
	this._poolCount=0;
	this._defaultPoolKey='orawrap_default_pool';

}

PoolManager.prototype.getPoolCount=function(){
	return this._poolCount;
};

PoolManager.prototype.createPool=function(config,cb){
	var resolver;
	var promise;
	var that=this;

	resolver=function(resolve,reject){
		var key= config.poolName||that._defaultPoolKey;
		oraceldb.createPool(config,function(err,p){
			if(err){console.log(err.message);}

			that._poolCount+=1;
			p._poolName=key;
			p._q=async.queue(function(task,releaseCb){
				p.getConnection(err,connection){
					task.getConnCb(err,connection,releaseCb);
				}
			},config.poolMax);

			that._poolMap[key]=p;

			resolve(that._poolMap[key]);
		});
	};

    promise=new Promise(resolver);
    return promise;
};

PoolManager.prototype.defaultPoolExist=function(){
	return !!this._poolMap[this._defaultPoolKey];
};

PoolManager.prototype.getDefaultPool=function(){
	return this.getPool(this._defaultPoolKey);
};

PoolManager.prototype.getPool=function(poolName){
	
};