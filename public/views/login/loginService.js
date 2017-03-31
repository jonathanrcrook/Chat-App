angular.module('chatApp')
.service('loginService', function($http) {
  this.logUser = function(user) {
    return $http.post('/login', user)
  }
})
