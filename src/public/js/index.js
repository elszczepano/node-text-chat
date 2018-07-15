const socket = io.connect('http://localhost:8080');
import '../scss/main.scss';

const messageField = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const scrollContainer = document.querySelector('.messages');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const color = getRandomColor();

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
        output.innerHTML += `<li><strong style='color:${data.color}'>${data.nickname}:</strong>${data.message}</li>`;
        scrollContainer.scrollTo(0,data.scroll);
    }
});
