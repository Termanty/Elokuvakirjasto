/* global MovieApp */

MovieApp.config(function ($routeProvider) {   
    $routeProvider
            .when('/', {
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            })
            .when('/login', {
                controller: 'UserController',
                templateUrl: 'app/views/user.html'
            })
            .when('/movies', {
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            })
            .when('/movies/new', {
                controller: 'NewController',
                templateUrl: 'app/views/new.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/:key', {
                controller: 'ShowController',
                templateUrl: 'app/views/show.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .when('/movies/edit/:key', {
                controller: 'EditController',
                templateUrl: 'app/views/edit.html',
                resolve: {
                    currentAuth: function (AuthenticationService) {
                        return AuthenticationService.checkLoggedIn();
                    }
                }
            })
            .otherwise({
                controller: 'ListController',
                templateUrl: 'app/views/list.html'
            });
});

MovieApp.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

