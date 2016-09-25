Promise.race([sendRequest('/db1/users'),
              sendRequest('/db2/users'),
              sendRequest('/db3/users')
             ])
       .then(function(users){
          console.log(users);
       })
       .catch(function(error){
          console.log(error);
       });

function sendRequest(url){
  return new Promise(function(resolve,reject){
      setTimeout(function(){
         console.log('request data from:' + url);
         if( url.indexOf('db1') !=-1 )
          {
            resolve([{uid:1, name:'Tom'},{uid:2, name:'Mary'}]);
          }
        else if( url.indexOf('db2') != -1 )
          {
            resolve([{uid:1, name:'Tom'},{uid:2, name:'Mary'}]);
          }
        else if( url.indexOf('db3') != -1 )
          {
            resolve([{uid:1, name:'Tom'},{uid:2, name:'Mary'}]);
          }
        else
          {
            reject('Invalid Url!');
          }
      }, Math.random() * 100);
  });
}