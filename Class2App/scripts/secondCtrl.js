angular
.module("class2App")
.controller("secondCtrl",function($scope,secondService){

  $scope.getData = function() {
    secondService.targetData().then(function(dataIneed){
      $scope.displayViewData = dataIneed;
    });
  }
    $scope.getData();

});//controllerEnd
