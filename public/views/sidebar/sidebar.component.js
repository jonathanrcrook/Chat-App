// LINKS COMPONENT TO CONTROLLER

angular.module('chatApp')
.component('sidebarComponent', {
  templateUrl: './views/sidebar/sidebar.html',
  bindings: {
    currentUser: '='
  },
  controller: 'sidebarController'
})
