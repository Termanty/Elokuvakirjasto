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
            .otherwise({
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            });
});