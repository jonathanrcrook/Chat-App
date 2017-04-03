// MAIN CONTROLLER FOR ALL THINGS CHAT

// Gets current user and shows in the view
angular.module("chatApp").controller("mainChatCtrl", function($scope, $interval, mainChatService) {
  mainChatService.getUser().then(function(response) {
    $scope.currentUser = response.data;
    $scope.getChatsByUser($scope.currentUser.id)
  })

  // Get users and shows users in the view
  $scope.getUsers = function() {
    mainChatService.getUsers().then(function(response) {
      $scope.users = response.data
    })
  }
  // Creates a new chat
  $scope.createChat = function(friendId) {
    $scope.showMainMessageComponent = true;
    mainChatService.createChat($scope.currentUser.id, friendId).
    then(function(response) {
      console.log(response.data)
      $scope.currentChat = response.data
      $scope.allMessages = []
    })
  }

  $scope.selectChat = function(chatId) {
    console.log(chatId)
    $scope.showMainMessageComponent = true;
    // filter $scope.chats to set current chat to chat that matches chatId
    const filteredChats = $scope.chats.filter(function(chat) {
       return chat.chat_id == chatId
    })
    $scope.currentChat = filteredChats[0]
    $scope.allMessages = [];
    $scope.getChatMessages($scope.currentChat.chat_id)
  }

  // Pulling chat from database. Pulling chatId, message, timestamp and userId
  $scope.getChatMessages = (chatId) => {
    // console.log(chatId);
    if (!chatId) return;
    mainChatService.getChatMessages(chatId)
    .then(response => {
      $scope.allMessages = response.data
    })
  }

  $scope.allMessages = [];

  $scope.getChatsByUser = function(userId) {
    mainChatService.getChatsByUser(userId).then(function(response) {
      console.log(response.data);
      $scope.chats = response.data
    })
  }

  $scope.getUsers();
  $interval(function() {
    if ($scope.currentChat && $scope.currentChat.chat_id) {
      $scope.getChatMessages($scope.currentChat.chat_id)
    }
  }, 1000)
})
