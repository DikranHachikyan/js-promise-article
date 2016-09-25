sendRequest('/users/')
  .then(function(users){
    var names = [];
    for( let user of users)
    {
      names.push('/user-comments/' + user.name);
    }
    var promises = names.map(sendRequest);//map each url to sendRequest() 
    return Promise.all(promises);
  })
  .then(function(comments){
    console.log(comments) ;
  })
  .catch( function(error){
    console.log(error);
  });

function sendRequest(url){
  return new Promise(function(resolve,reject){
      setTimeout(function(){
         console.log('request data from:' + url);
         if( url.indexOf('users') !=-1 )
          {
            resolve([{uid:1, name:'Tom'},{uid:2, name:'Mary'}]);
          }
        else if( url.indexOf('Tom') != -1 )
          {
            resolve(['Lorem ipsum', 'Impedit ipsam, ad unde?'])
          }
        else if( url.indexOf('Mary') != -1 )
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