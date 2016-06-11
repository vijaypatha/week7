angular
.module('class2App')
.service("dataService",function($http,$q){

  // this.starWarsData = function(){
  //   return $http.get('http://swapi.co/api/') //getting data
  //   .then(function(response){ //promise
  //     return response.data;
  //   });
  // };

  this.starWarsData = function(){
    var defered = $q.defer(); //run the defer method in the library
     $http.get('http://swapi.co/api/') //getting data
    .then(function(response){ //promise
      var starWarsData = response.data; //.data is the key for the response obj
      defered.resolve(starWarsData); //reslove is a builtin(gets the data)
    });
    return defered.promise; //.promise builtin that will capture the var defered
    //not turning data, just a promise.
  };

});
