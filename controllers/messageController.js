const db = require('../db')

// Creates a chat and attaches current user to that chat
module.exports = {
  createChat: (req, res, next) => {
    db.createChat((err, chats) => {
      if(err) { return next(err) }
      const chat = chats[0];
      chat.chat_id = chat.id
      delete chat.id
      db.attachUserToChat([chat.chat_id, req.body.userId], (err, chatUser) => {
        if (err) {return next(err)}
        if(!req.body.users) {
          return res.status(200).json(chat)
        }
        console.log(req.body)
        for (var user of req.body.users) {
          console.log(user)
          db.attachUserToChat([chat.chat_id, user.id], (err, chatFriendUser) => {
            if (err) {return next(err)}
          })
        }
        return res.status(200).json(chat)
      })
    })
  },

  // Displays chatId, userId and the message on the view
  createNewMessage: (req, res, next) => {
    const newMessage = [
      req.body.chatId,
      req.body.userId,
      req.body.message
    ]

    // Stores a message on the database
    db.createMessage(newMessage, function(err, message) {
      if(err) { return next(err) }
      const data = message[0];
      return res.status(200).json(data)
    })
  },

  getChatMessages: (req, res, next) => {
    console.log("Get Chat Messages, ChatID: ", req.params);
    db.getChatMessages(req.params.id, function(err, messages) {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }
      console.log("Get Chat Messages, Messages: ", messages);
      return res.status(200).json(messages)
    })
  },

  getChatsByUser: (req, res, next) => {
    db.getChatsByUser(req.params.userId, function(err, chatsByUser) {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }
      return res.status(200).json(chatsByUser)
    })
  }
}
