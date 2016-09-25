
function sendRequest(url){
  return new Promise(function(resolve,reject){
      setTimeout(function(){
         console.log('request data from:' + url);
         if( url != null && typeof url != 'undefined')
          {
            resolve('iPhone 7');
          }
        else
          {
            reject('Invalid Url!');
          }
      }, Math.random() * 100);
  });
}

sendRequest('/product/')
  .then(function(product){
      console.log('Data:' + product);
   })
  .catch(function(error){
      console.log('Error:',error);
   });