const db = require('../db')

// Creates a chat, saves to database and attaches current user to that chat
module.exports = {
    createChat: (req, res, next) => {
        db.createChat((err, chats) => {
            if (err) {
                return next(err)
            }
            const chat = chats[0];
            chat.chat_id = chat.id
            delete chat.id
            db.attachUserToChat([chat.chat_id, req.body.userId], (err, chatUser) => {
                if (err) {
                    return next(err)
                }
                if (!req.body.users) {
                    return res.status(200).json(chat)
                }
                console.log(req.body)
                for (var user of req.body.users) {
                    console.log(user)
                    db.attachUserToChat([chat.chat_id, user.id], (err, chatFriendUser) => {
                        if (err) {
                            return next(err)
                        }
                    })
                }
                return res.status(200).json(chat)
            })
        })
    },

    // Creates a new chat and displays chatId, userId and the message on the view
    createNewMessage: (req, res, next) => {
        const newMessage = [
            req.body.chatId,
            req.body.userId,
            req.body.message
        ]

        // The new created chat message is stored to the database
        db.createMessage(newMessage, (err, message) => {
            if (err) {
                return next(err)
            }
            const data = message[0];
            return res.status(200).json(data)
        })
    },

    // Gets chat messages and returns from database
    getChatMessages: (req, res, next) => {
        console.log("Get Chat Messages, ChatID: ", req.params);
        db.getChatMessages(req.params.id, (err, messages) => {
            if (err) {
                console.log(err)
                return res.status(500).json(err)
            }
            console.log("Get Chat Messages, Messages: ", messages);
            return res.status(200).json(messages)
        })
    },

    // Gets chats by user
    getChatsByUser: (req, res, next) => {
        db.getChatsByUser(req.params.userId, (err, chatsByUser) => {
            if (err) {
                console.log(err)
                return res.status(500).json(err)
            }
            return res.status(200).json(chatsByUser)
        })
    }
}
