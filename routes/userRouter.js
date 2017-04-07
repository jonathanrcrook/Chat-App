const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const passport = require('passport')


router.post('', usersController.create, passport.authenticate('local', {
    successRedirect: '/users/me',
    failureRedirect: '/login/oops'
}))

router.get('', usersController.getUsers)
router.get('/me', usersController.me)



module.exports = router;
