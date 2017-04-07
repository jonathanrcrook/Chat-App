const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const passport = require('passport')

router.post('', passport.authenticate('local', {
    successRedirect: '/users/me',
    failureRedirect: '/login/oops'
}))

router.get('/oops', loginController.oops)
router.get('', loginController.logout)



module.exports = router;
