angular.module('chatApp')
.controller('loginCtrl', function($scope, $state, loginService) {
  $scope.login = function(user) {
  loginService.logUser(user).then(function(result) {
    console.log(result)
    if (result.status === 200) {
      $state.go('mainChat')
    }
  })
  .catch(function(err) {
    $scope.showErrorMessage = true;
  })
}
})
