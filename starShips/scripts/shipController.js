angular
.module('starWars')
.controller("shipController",function($scope,shipData){
  $scope.test="Testing: take off";
  $scope.getDatafromService = function(){
    shipData.getDataFromServer().then(function(dataFromResponse){
      $scope.displayData = dataFromResponse;
    });
  }
  $scope.getDatafromService();

});//shipController END.
