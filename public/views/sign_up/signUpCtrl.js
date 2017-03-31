angular.module('chatApp')
.controller('signUpCtrl', function($scope, $state, signUpService) {
  $scope.signup = function(user) {
    signUpService.createUser(user).then(function(result) {
      console.log(result)
      if(result.status === 200) {
        $state.go('message')
      }
    }).catch(function(err) {
      // console.log(err)
      $scope.showErrorMessage = true;
    })
  }
})
