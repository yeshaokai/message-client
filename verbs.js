var request = require('request');
var user,pass,project,plan,stage;
user="yeshaokai";
pass="Ws01114604";
project="ARGOS";
plan="KAIK";
stage="Default Stage";
var url_post = 'http://localhost:8085/rest/api/latest/queue/'+project+'-'+plan+'?executeALLStages=true';
var url_get = "http://52.27.142.41:3000/consume";
exports.post= function(){
    return request({
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
};
exports.get=function(){
  return  request({
	url:url_get,
	method:"GET"
    },function(error,res,body){
	  global.json=JSON.parse(body);	
	  console.log("got the commit info");
	  console.log(JSON.stringify(translate()));
    });
};
function translate(){
    var j = global.json;
    //    console.log(j);
        return {
	to_branch:j.pullrequest_updated.destination.branch.name,
	repository:j.pullrequest_updated.destination.repository.links.self.href,
	    from_branch:j.pullrequest_updated.source.branch.name,
	    author:j.pullrequest_updated.author.username,
	    date:j.pullrequest_updated.date
	    }
};
	    

    
    
	     