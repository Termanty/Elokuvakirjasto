/* global angular */

// Toteuta moduulisi tänne

var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

MovieApp.run(function(AuthenticationService, $rootScope, $location){
  $rootScope.logOut = function(){
    AuthenticationService.logUserOut();
    $location.path('/');
  };

  $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
});

