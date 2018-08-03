import axios from 'axios';

function addMessageToDatabase(message, nickname, room) {
    return axios({
        method: 'post',
        url: '/add',
        data: {
            name: nickname,
            message: message,
            room: room
        }
    });
}

export default addMessageToDatabase;