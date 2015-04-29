/* global MovieApp */

MovieApp.controller('ListController', function($scope, FirebaseService) {  
    $scope.movies = FirebaseService.getMovies(); 
});

MovieApp.controller('NewController', function($scope, FirebaseService, $location) {
   $scope.addMovie = function() {

       FirebaseService.addMovie($scope.movie);
       
       $scope.movie.name = '';
       $scope.movie.director = '';
       $scope.movie.pubyear = '';
       $scope.movie.description = '';
       
       $location.path('/');
       };

});

