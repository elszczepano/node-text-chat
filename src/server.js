import app from './app';
import socket from  'socket.io';

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${server.address().port}`);
});

//Setup Socket.io
const io = socket(server);


io.on('connection', socket => {
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
    socket.on('typing', function(data){
        socket.broadcast.emit('typing',data);
    });
});
