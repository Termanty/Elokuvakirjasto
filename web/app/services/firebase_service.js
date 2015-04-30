
/* global MovieApp */

MovieApp.service('FirebaseService', function($firebase) {
    var moviesFirebaseRef = new Firebase('incandescent-torch-8682.firebaseio.com/movies');
    var moviesSync = $firebase(moviesFirebaseRef);
    var movies = moviesSync.$asArray();
    
    this.addMovie = function (movie) {
        movies.$add(movie);
    };
    
    this.saveMovie = function (movie) {
        movies.$save(movie);
    };
    
    this.deleteMovie = function (movie) {
        movies.$remove(movie);
    };
    
    this.getMovies = function () {
        return movies;
    };
    
    this.getMovie = function (key, done) {
        movies.$loaded(function () {
            done(movies.$getRecord(key));
        });
    };
    
});

