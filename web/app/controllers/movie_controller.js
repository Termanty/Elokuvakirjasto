/* global MovieApp */

MovieApp.controller('ListController', function($scope, FirebaseService, APIService) {  
    $scope.movies = FirebaseService.getMovies(); 
    $scope.omdbmovies = [];

    $scope.findMovie = function () {
        APIService.findMovie($scope.findbyname, $scope.findbyyear)
                .success(function (movies) {
                    $scope.omdbmovies = movies.Search;
                });
    };
    
    $scope.deleteMovie = function (index) {
        FirebaseService.deleteMovie($scope.movies[index]);
    };
});

MovieApp.controller('NewController', function ($scope, FirebaseService, $location) {
    $scope.addMovie = function () {
        FirebaseService.addMovie($scope.movie);
        $scope.movie.name = '';
        $scope.movie.director = '';
        $scope.movie.pubyear = '';
        $scope.movie.description = '';
        $location.path('/');
    };
});

MovieApp.controller('ShowController', function ($scope, $routeParams, FirebaseService) {
    FirebaseService.getMovie($routeParams.key, function (movie) {
        $scope.movie = movie;
    });
});

MovieApp.controller('EditController', function ($scope, $routeParams, FirebaseService, $location) {
    FirebaseService.getMovie($routeParams.key, function (movie) {
        $scope.movie = movie;
    });

    $scope.saveMovie = function () {
        FirebaseService.saveMovie($scope.movie);
        $location.path('/');
    };
});

MovieApp.controller('SearchController', function($scope, APIService){
  APIService.findMovie('lord').success(function(movies){
    $scope.movies = movies;
  });
});
