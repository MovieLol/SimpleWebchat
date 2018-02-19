var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('www'));

var userlist = [];

io.on('connection', function(socket){
  //console.log('User connected');

  socket.name = 'Stranger';
  userlist.push(socket.name);

  io.sockets.emit('userlist', userlist);

  socket.on('disconnect', function(reason){
    var index = userlist.indexOf(socket.name);
    if (index !== -1) userlist.splice(index, 1);
    io.sockets.emit('userlist', userlist);
  });

  socket.on('message', function(msg){
    io.sockets.emit('message', socket.name, msg);
  });

  socket.on('username', function(newUsername){
    if(newUsername.length > 10 || newUsername.length <= 0){
      return;
    }
    var index = userlist.indexOf(socket.name);
    if (index !== -1) userlist[index] = newUsername;
    socket.name = newUsername;
    io.sockets.emit('userlist', userlist);
  });
});

http.listen(2135, function(){
  console.log('listening on *:2135');
});