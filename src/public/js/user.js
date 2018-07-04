const userField = document.getElementById('user');
const roomField = document.getElementById('room');

roomField.addEventListener("change", function() {
    sessionStorage.setItem('room', roomField.value);
});

userField .addEventListener("change", function() {
    sessionStorage.setItem('user', userField.value);
});

