const socket = io.connect('http://localhost:8080');
import addMessageToDatabase from './modules/addMessageToDatabase';
import getRandomColor from './modules/getRandomColor';
import '../scss/main.scss';

//Required elements handlers
const messageField = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const scrollContainer = document.getElementById('messagesBox');
const broadcast = document.getElementById('broadcast');
const color = getRandomColor();

//Emitters
messageField.addEventListener('keypress', function() {
    socket.emit('typing', {
        room: room,
        nickname: nickname
    });
});

//Handle sending messages
function sendMessage(message) {
    if(!message) return;
    messageField.value = '';
    socket.emit('chat', {
        message: message,
        nickname: nickname,
        room: room,
        color: color
    });
}

btn.addEventListener('click', function(event) {
    event.preventDefault();
    addMessageToDatabase(messageField.value, nickname, room);
    sendMessage(messageField.value);
});

//Getting data from socket
socket.on('chat', function(data) {
    if(data.room === room) {
        broadcast.innerHTML = "";
        output.innerHTML += `<li><strong style='color:${data.color}'>${data.nickname}:</strong>${data.message}</li>`;
        scrollContainer.scrollTo(0,data.scroll);
    }
});

socket.on('typing', function(data) {
    if(data.room === room) {
        broadcast.innerHTML = `${data.nickname} is typing a message`;
    }
});
