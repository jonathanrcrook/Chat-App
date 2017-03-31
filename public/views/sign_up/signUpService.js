angular.module('chatApp')
.service('signUpService', function($http) {
  // FUNCTION POSTING USER & RETURNING PROMISE
  this.createUser = function(user) {
    return $http.post('/users', user);
  }
})
