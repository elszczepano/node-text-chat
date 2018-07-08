const socket = io.connect('http://localhost:8080');
import '../scss/main.scss';

const message = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const scrollContainer = document.querySelector('.messages');

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        nickname: nickname
    });
});

socket.on('chat', function(data) {
    if(!message.value) return;
    output.innerHTML += `<li><strong>${data.nickname}:</strong>${data.message}</li>`;
    message.value = '';
    scrollContainer.scrollTo(0,output.scrollHeight);
});
