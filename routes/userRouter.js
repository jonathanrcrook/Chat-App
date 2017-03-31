const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.post('', usersController.create)
router.get('', usersController.getUsers)
router.get('/me', usersController.me)



module.exports = router;
