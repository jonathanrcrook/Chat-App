angular.module('chatApp').controller('chatStarterController', function() {
    this.usersAdded = []
    // addUserToChat is adding users that you select into the usersAded array
    this.addUserToChat = function(user) {
        console.log("Hello?, ", this.usersAdded)
        this.usersAdded.push(user)
    }
})
