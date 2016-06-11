angular
.module("class2App")
.service("secondService",function($http){

  this.targetData = function(){
    return $http.get('http://swapi.co/api/')
    .then(function(response){
      return response.data;
    });

  };//targetData function

});//secondServiceEND
