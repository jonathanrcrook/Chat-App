const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('./passport');
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const chatRouter = require('./routes/chatRouter');
const db = require('./db')

const config = require('./config.json');

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
app.use('/logout', loginRouter);

// Listening for a connection with Sockets
io.on('connection', socket => {
  console.log(`Socket ${socket.id} connected`)
  io.sockets.emit('newConnection', "Somebody connected")

  // Listening for a new Chat to be created
  socket.on('newChat', data => {
    console.log('New Chat: ', data)
    socket.join(data.chat_id)
    io.sockets.emit('newChat', 'New Chat created')
  })

  // Listening for joined chat/selected chat on front end
  socket.on('joinChat', data => {
    console.log('Joined Chat', data)
    socket.join(data.chat_id)
  })
  // Listening for exsisting chats between users
  socket.on('messageSent', data => {
    console.log('Message Sent: ', data)
    io.to(data.chat_id).emit('getMessages', data)
  })

})

// Listening to port
server.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`)
});
