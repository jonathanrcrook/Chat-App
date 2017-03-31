// Gets users from backend code and sends data back to controller

angular.module('chatApp')
.service('mainChatService', function($http) {
  this.getUser = function() {
    return $http.get('/users/me');
  }

  this.getUsers = function() {
    return $http.get('/users')
  }

  this.sendMessage = function(message) {
    return $http.post('/chats/messages', message)
  }

  this.getMessage = function(chatByUser) {
    return $http.get('', chatByUser)
  }

  this.createChat = function(userId, friendId) {
    return $http.post('/chats', {userId, friendId})
  }

  this.getChatMessages = function (chatId) {
    return $http.get('/chats/messages/' + chatId)
  }

  // this.getChatsByUser = function (userId) {
  //   return $http.get('/chats' + userId)
  // }
});
