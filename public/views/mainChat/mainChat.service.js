// Gets users from backend code and sends data back to controller
// Endpoints

angular.module('chatApp')
.service('mainChatService', function($http) {
  const socket = io.connect('/');

  // Connects socket.io
  this.getSocket = function() {
    return socket;
  }

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

  this.createChat = function(userId, users) {
    return $http.post('/chats', {userId, users})
  }

  // this.createChat = function(userId, friendId) {
  //   return $http.post('/chats', {userId, friendId})
  // }

  this.getChatMessages = function (chatId) {
    return $http.get('/chats/messages/' + chatId)
  }

  this.getChatsByUser = function (userId) {
    return $http.get('/chats/' + userId)
  }

this.logout = function() {
  return $http.get('/logout')
}

});
