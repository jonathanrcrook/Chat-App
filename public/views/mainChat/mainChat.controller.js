// MAIN CONTROLLER FOR ALL THINGS CHAT

// Gets current user and shows in the view
angular.module("chatApp").controller("mainChatCtrl", function($scope, mainChatService) {
  mainChatService.getUser().then(function(response) {
    $scope.currentUser = response.data
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
      $scope.chat = response.data
    })
  }

  $scope.getChatMessages = (chatId) => {
    console.log(chatId);
    if (!chatId) return;
    mainChatService.getChatMessages(chatId)
    .then(response => {
      console.log(response.data)
    })
  }

  $scope.allMessages = [];

  // $scope.getChatsByUser = function() {
  //   mainChatService.getChatsByUser().then(function(response) {
  //     console.log(response.data);
  //     $scope.chat = response.data
  //   })
  // }

  $scope.getUsers();
})
