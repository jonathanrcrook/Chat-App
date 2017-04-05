angular.module('chatApp')
.component('chatStarterComponent', {
  templateUrl: './views/chatStarter/chat_starter.html',
  bindings: {
    currentUser: "=",
    users: "=",
    createChat: "&"
  },
  controller: 'chatStarterController'
})
