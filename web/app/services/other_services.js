/* global MovieApp */

MovieApp.service('APIService', function($http){
  this.findMovie = function(name, year){
    return $http.get('http://www.omdbapi.com', { params: { s: name, y: year } });
  };
});

MovieApp.service('AuthenticationService', function($firebase, $firebaseAuth){
  var firebaseRef = new Firebase('incandescent-torch-8682.firebaseio.com');
  var firebaseAuth = $firebaseAuth(firebaseRef); 

  this.logUserIn = function(email, password){
    return firebaseAuth.$authWithPassword({
      email: email,
      password: password
    });
  };

  this.createUser = function(email, password){
    return firebaseAuth.$createUser({
      email: email,
      password: password
    });
  };
  
  this.checkLoggedIn = function(){
    return firebaseAuth.$waitForAuth();
  };
  
  this.logUserOut = function(){
    firebaseAuth.$unauth();
  };

  this.getUserLoggedIn = function(){
    return firebaseAuth.$getAuth();
  };
});


