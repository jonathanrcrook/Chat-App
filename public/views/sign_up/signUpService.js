angular.module('chatApp')
.service('signUpService', function($http) {
  // Takes data from frontend and creates a user to post/save to the database by sending to the backend
  this.createUser = function(user) {
    return $http.post('/users', user);
  }
})
