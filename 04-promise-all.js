Promise
	.all([ 
			sendRequest('/news/'),
			sendRequest('/products/'),
			sendRequest('/ads/')
	])
	.then(function(results){
		console.log(results);
	})
	.catch(function(error){
		console.log(error);
	});

function sendRequest(url){
  return new Promise(function(resolve,reject){
      setTimeout(function(){
         console.log('request data from:' + url);
         if( url.indexOf('news') !=-1 )
          {
            resolve(['Excepteur sint occaecat','Duis aute irure ','Ut enim ad minim']);
          }
        else if( url.indexOf('products') != -1 )
          {
            resolve(['Lorem ipsum', 'Impedit ipsam'])
          }
        else if( url.indexOf('ads') != -1 )
          {
            resolve(['Doloremque quod','Temporibus consequuntur'])
          }
        else
          {
            reject('Invalid Url!');
          }
      }, Math.random() * 100);
  });
}