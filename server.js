const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('./passport');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const chatRouter = require('./routes/chatRouter');
const db = require('./db')

const config = require('./config.json');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'))

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/chats', chatRouter);



app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`)
});
