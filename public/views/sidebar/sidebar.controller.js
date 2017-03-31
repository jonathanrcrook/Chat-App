// Inject service into controller.
// Calls function from service to get data from service

angular.module('chatApp')
.controller('sidebarController', function($state, mainChatService) {
  // this.getUser = function() {
  //     mainChatService.getUser().then(response => {
  //       this.currentUser = response.data;
  //     })
  // }
  //
  // this.getUser();
})
