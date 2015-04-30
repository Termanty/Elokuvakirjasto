/* global angular */

// Toteuta moduulisi tänne

var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

MovieApp.config(function ($routeProvider) {   
    $routeProvider
            .when('/', {
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            })
            .when('/movies', {
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            })
            .when('/movies/new', {
                controller: 'NewController',
                templateUrl: 'app/views/new.html'
            })
            .when('/movies/:key', {
                controller: 'ShowController',
                templateUrl: 'app/views/show.html'
            })
            .when('/movies/edit/:key', {
                controller: 'EditController',
                templateUrl: 'app/views/edit.html'
            })
            .otherwise({
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            });
});

MovieApp.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

MovieApp.service('APIService', function($http){
  this.findMovie = function(name, year){
    return $http.get('http://www.omdbapi.com', { params: { s: name, y: year } });
  };
});

