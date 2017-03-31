const express = require('express');
const messageController = require('../controllers/messageController');
const router = express.Router();

router.post('', messageController.createChat)
router.post('/messages', messageController.createNewMessage)
router.get('/messages/:id', messageController.getChatMessages)
// router.get('/chats/:id', messageController.getChatsByUser)



module.exports = router;
