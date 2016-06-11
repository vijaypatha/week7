angular
.module("class2App")
.service("dataService2",function($http){
  //service is like a construction function.

  // this.targetData = function(){
  //   return $http.get(http://swapi.co/api/').then(function(response){
  //     return response.data;
  //
  //   });
  // };

  this.targetData = function(){
    return $http.get('http://swapi.co/api/')
    .then(function(dataResponse){
      return dataResponse.data;
    });
  };//targetData




});//dataService2


/*

$http.get('url',[config])
.then(sucessCB,errorCB);

$http.get('url')
.then(sucessCB,errorCB);

*/
