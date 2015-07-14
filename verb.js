var request = require('request');
var user,pass,project,plan,stage;
user="yeshaokai";
pass="Ws01114604";
project="BAR";
plan="FOO";
stage="Default Stage";
var url_post = 'http://localhost:8085/rest/api/latest/queue/'+project+'-'+plan+'?executeALLStages=true';
var url_get = "http://52.27.142.41:3000/consume";
exports.post=request({
	auth:{
	    'user':user,
	    'pass':pass
		},	
	url:url_post,
	method:"POST"
	    },
    function(error,response,body){
	console.log(body);
    });
exports.get=request({
	url:url_get,
	method:"GET"
    },function(error,res,body){
	console.log(res);
	console.log(body);
    });




    
    
	     