angular.module("classApp").controller("mainCtrl", function($scope,dataService){
$scope.getAllArtist = function(){
  dataService.getAll();
}
// $scope.artistAddition = function(){
//   dataService.addArtist(buildArtist());
// }
// function buildArtist(){
//   return {
//     name: $scope.name,
//     genre: $scope.genre,
//     rating: $scope.rating
//   }
// }
});
