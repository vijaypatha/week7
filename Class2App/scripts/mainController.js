angular
.module("class2App")
.controller("mainController", function($scope, dataService2) {
  $scope.test = "angular is working";

  $scope.getData = function() {

  //   dataService.starWarsData().then(function(resultObj) { //purpose of .then onwards i
  //     //ts a promise returning the data. Upon which JS will go back to this function.
  //     $scope.someData = resultObj;
  //   });
  // };
  dataService2.targetData().then(function(resultFromService){
    $scope.displayViewData = resultFromService;
  });
};

  $scope.getData();
});
