angular.module('chatApp')
    .component('friendsListComponent', {
        templateUrl: './views/friends_list/friends_list.html',
        bindings: {
            currentUser: "=",
            users: "=",
            createChat: "&"
        },
        controller: 'friendsListController'
    })
