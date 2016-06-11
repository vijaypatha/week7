angular.module("classApp").service("dataService", function($http){

  // this.getAll = function(){
  //   return $http.get('http://localhost:3000/artists')
  //   .then (function(response){ //introduction of asycn script
  //     console.log(response.status === 200);
  //     console.log(response.data);
  //     return response.data;
  //   })
  // };
  //
  // this.addArtist = function(obj){
  //   return $http.post('http://localhost:3000/artists')
  //   .then(function(response){
  //     console.log(response);
  //
  //   })
  // };

  this.getAll = function(){
    return $http.get('http://swapi.co/api/people/1/')
    .then (function(response){ //introduction of asycn script
      console.log(response.status);
      console.log(response.data);
      return response.data;
    })
  };

});
