
sendRequest( '/categories/', function(data){
	console.log('Process categories')
	for( let category of data ){
		sendRequest( category.slug , function(data){
			console.log('Process items in '+ category.name);
			console.log('Items:' + data);	
		});//items
	}	
});// categories




function sendRequest(url, callback){
	console.log('Send request to:' + url);
	setTimeout( function(){
		var categories= [{ id:1, name:'Mobile Phone', slug:'mobile-phones'}, 
						 { id:2, name:'Digital Cameras', slug:'digital-cameras'}];		
		if( url.indexOf('categories') != -1)
			callback(categories);
		else if( url.indexOf('mobile-phones') != -1 )
			callback(['Samsung', 'Nokia']);
		else if( url.indexOf('digital-cameras') != -1 )
			callback(['LG','Sony','Cannon']);
	});//set timeout
}//send request