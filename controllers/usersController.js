const db = require('../db');
const bcrypt = require('bcryptjs');


// Turns stored password into a hash
function hash(given) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(given, salt)
}

module.exports = {
  create: (req, res, next) => {
    const userInfo = [
      req.body.name,
      req.body.email,
      hash(req.body.password)
    ]

    // Stores created user into database
    db.createUser(userInfo, function(err, users) {
      if (err) {
        console.log(err)
        return next(err)
      }
      const data = users[0];
      delete data.password // deleting password from user view
      res.status(200).json(data);
    });
  },

  me: (req, res, next) => {
    if (!req.user) return res.status(403).send('current user not defined');
    const data = req.user;
    delete data.password;
    res.status(200).json(data);
  },

// Getting users from database and filtering through to show current user
  getUsers: (req, res, next) => {
    db.getUsers((err, users) => {
      if(err) { return next(err) }
      console.log(req.user)
      if (req.user) {
        const filteredUsers = users.filter(user => user.name !== req.user.name)
        return res.status(200).json(filteredUsers)
      }
      return res.status(200).json(users)
    })
  }
};
