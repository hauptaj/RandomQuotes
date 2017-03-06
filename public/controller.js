var app = angular.module('myMod');

app.controller('myController', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/randomPhrase'
  }).then(function successCallback(response) {
    $scope.myPhrases = response.data;
  });

//add for random words
  $http({
    method: 'GET',
    url: '/random'
  }).then(function successCallback(response) {
    $scope.myWords = response.data;
  });

  $http({
    method: 'GET',
    url: '/myinfo'
  }).then(function successCallback(response) {
    $scope.information = response.data;
  });

  $http({
    method: 'GET',
    url: '/thingstobuy'
  }).then(function successCallback(response) {
    $scope.shoppingList = response.data;
  });

});
