var app = angular.module('myMod');

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/phrases', {
            controller: 'myController',
            templateUrl: 'phrases.html'
        })
        .when('/myinfo', {
            controller: 'myController',
            templateUrl: 'myinfo.html'
        })
        .when('/thingstobuy', {
            controller: 'myController',
            templateUrl: 'thingstobuy.html'
        })
        .when('/words', {
            controller: 'myController',
            templateUrl: 'words.html'
        });

    $locationProvider.hashPrefix('');
});
