const socket = io.connect('http://localhost:8080');
import '../scss/main.scss';

const messageField = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const scrollContainer = document.querySelector('.messages');

btn.addEventListener('click', function() {
    if(!messageField.value) return;
    const message = messageField.value;
    messageField.value = '';
    socket.emit('chat', {
        message: message,
        nickname: nickname,
        room: room
    });

});

socket.on('chat', function(data) {
    if(data.room === room) {
        output.innerHTML += `<li><strong>${data.nickname}:</strong>${data.message}</li>`;
        scrollContainer.scrollTo(0,data.scroll);
    }
});
