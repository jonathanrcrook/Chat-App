angular.module('chatApp')
.controller('messageFormController', function($state, mainChatService) {
  // console.log("Running")
  const ctrl = this;
  const socket = mainChatService.getSocket();
  socket.on('getMessages', function(message) {
    console.log(message)
    ctrl.getChatMessages({id:ctrl.chat.chat_id})
  })

  this.sendMessage = function(message) {
    // console.log(message)
    mainChatService.sendMessage({
      chatId: this.chat.chat_id,
      userId: this.currentUser.id,
      message: message
    }).then(response => {
      // this.allMessages.push(message)
      this.messageForm.$setPristine()
      this.messageForm.$setUntouched()
      this.message = ''
      console.log(this.chat.chat_id);
      // this.getChatMessages({id:this.chat.chat_id})      // message in input box goes away after sending message with enter key
      // console.log(response)
      // Add to message array
      socket.emit('messageSent', response.data)
    }).catch((err) => {
      console.log(err)
    })
  }
})
