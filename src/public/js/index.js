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
scrollContainer.scrollTo(0,scrollContainer.scrollHeight);

//Handle sending messages
function sendMessage(message) {
    if(!message) return;
    socket.emit('chat', {
        message: message,
        nickname: nickname,
        room: room,
        color: color
    });
}

function triggerSendMessage(event) {
    event.preventDefault();
    let textMessage = messageField.value;
    messageField.value = '';
    if(textMessage.replace(/\s/g, '').length) {
        addMessageToDatabase(textMessage, nickname, room);
        sendMessage(textMessage);
    }
}

//Handle "typing message"
messageField.addEventListener('keypress', function(event) {
    socket.emit('typing', {
        room: room,
        nickname: nickname
    });
    if(event.keyCode === 13 && !event.shiftKey) {
        triggerSendMessage(event);
    }
});
btn.addEventListener('click', function(event) {
    triggerSendMessage(event);
});

//Getting data from socket
socket.on('chat', function(data) {
    if(data.room === room) {
        broadcast.innerHTML = "";
        output.innerHTML += `<li class="message"><strong class="message--name" style='color:${data.color}'>${data.nickname}:</strong>${data.message}</li>`;
        scrollContainer.scrollTo(0,scrollContainer.scrollHeight);
    }
});

socket.on('typing', function(data) {
    if(data.room === room) {
        broadcast.innerHTML = `${data.nickname} is typing a message`;
    }
});
