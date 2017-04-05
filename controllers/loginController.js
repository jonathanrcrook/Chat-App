const db = require('../db');

module.exports = {
  home: (req, res, next) => {
    res.send('Welcome!');
  },

  oops: (req, res, next) => {
    return res.status(401).json({message: "User not found"})
  },

  logout: (req, res, next) => {
    req.logout();
    res.status(200).json({message: "Logout Succesful"})
  },

  read: (req, res, next) => {

  }
};
