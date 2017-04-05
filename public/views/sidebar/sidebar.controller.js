angular.module('chatApp')
.controller('sidebarController', function($state, mainChatService, $location) {
  this.logout = () => {
    mainChatService.logout().then((response)=>{
      $location.path('/')
    })
    .catch((err)=>err)
  }
})
