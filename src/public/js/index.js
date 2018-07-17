const socket = io.connect('http://localhost:8080');
import '../scss/main.scss';

const messageField = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const scrollContainer = document.getElementById('messages');
const broadcast = document.getElementById('broadcast');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const color = getRandomColor();

messageField.addEventListener('keypress', function() {
    socket.emit('typing',{
        room: room,
        nickname: nickname
    });
});

btn.addEventListener('click', function() {

    if(!messageField.value) return;
    const message = messageField.value;
    messageField.value = '';
    socket.emit('chat', {
        message: message,
        nickname: nickname,
        room: room,
        color: color
    });
});



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
