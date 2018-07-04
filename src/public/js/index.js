const socket = io.connect('http://localhost:8080');
import '../scss/main.scss';



const message = document.getElementById('message');
const user = sessionStorage.getItem('user');
const room = sessionStorage.getItem('room');
const btn = document.getElementById('send');
const output = document.getElementById('output');
