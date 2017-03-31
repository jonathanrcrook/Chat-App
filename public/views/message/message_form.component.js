angular.module('chatApp')
.component('messageFormComponent', {
  templateUrl: './views/message/message_form.html',
  bindings: {
    currentUser: '=',
    chat: '=',
    allMessages: '=',
    getChatMessages: '&'
  },
  controller: 'messageFormController'
})
