angular
.module("starWars")
.service("shipData",function($http,$q){
  //services are similar to constructor functions

  // this.getShipData = function(){
  //   //var deferred = $q.defer();
  //   //remove return in front of $http in line 9
  //   return $http.get('http://swapi.co/api/starships/')
  //   .then(function(response){
  //     //var getShipData = response.data
  //     //deferred.resolve(getShipData);
  //     return response.data;
  //   });
  //   //return deferred.promise;
  // };

  //$q
  this.getDataFromServer = function(){
    var deferred = $q.defer();
    $http.get("http://swapi.co/api/starships/")
    .then(function(response){
      var getDataFromServer = response.data; //purpose?
      deferred.resolve(getDataFromServer); //builin $q object (reslove)

    }); //function with parameter response.
    return deferred.promise;

  };//getDataFromServer funciton.






});// shipData END.
