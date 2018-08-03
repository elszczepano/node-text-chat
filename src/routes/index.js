import express from 'express';
const router = express.Router();

const ChatroomController = require('../controllers/ChatroomController');

router.get('/', ChatroomController.home);

router.post('/chatroom/:id',
    ChatroomController.chatroom
);

router.post('/add',
    ChatroomController.add
);

module.exports = router;