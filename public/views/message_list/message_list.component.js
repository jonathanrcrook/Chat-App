angular.module('chatApp')
.component('messageListComponent', {
  templateUrl: './views/message_list/message_list.html',
  bindings: {
    chat: '=',
    allMessages: '='
  },
  controller: 'messageListController'
})
