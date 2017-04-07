const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');

const db = require('./db');

const config = {
    usernameField: 'email',
    passwordField: 'password'
}

// Runs when passport.authenticate('local') is called
passport.use(new LocalStrategy(config, (email, password, done) => {
    db.findUserByEmail([email], (err, users) => {
        console.log(err)
        console.log(users)
        const user = users[0]
        if (err) {
            return done(err)
        }
        if (!user) {
            return done(null, false)
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false)
        }
        return done(null, user)
    })
}));

passport.deserializeUser(function(id, done) {
    db.findUserById([id], (err, users) => {
        done(err, users[0])
    });
});

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

module.exports = passport
