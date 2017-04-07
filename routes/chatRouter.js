const express = require('express');
const messageController = require('../controllers/messageController');
const router = express.Router();

// Connects the router to the end points in the messageController
router.post('', messageController.createChat)
router.get('/:userId', messageController.getChatsByUser)
router.post('/messages', messageController.createNewMessage)
router.get('/messages/:id', messageController.getChatMessages)



module.exports = router;
