const massive = require('massive');

const massiveInstance = massive.connectSync({
  connectionString: 'postgres://jonathancrook@localhost/send_db'
})

module.exports = massiveInstance
