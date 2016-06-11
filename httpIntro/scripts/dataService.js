angular.module("httpApp").service("dataService",['errorHandler', function(errorHandler){
var baseUrl = '';

this.getData = function(something){
  return $http.get(baseUrl + something).then(function(response){
if(response.status !== 200) {

}
return response.data.people;
},function(data, status,header,config) {
  errorHandler(data);
}
  })
}




}]);
