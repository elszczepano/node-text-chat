let room = document.querySelector('#room');

room.addEventListener('change', function() {
    document.querySelector('#joinForm').action = `http://localhost:8080/chatroom/${room.value}`;
});
