import express from 'express';
const router = express.Router();

const ChatroomController = require('../controllers/ChatroomController');

router.get('/', ChatroomController.home);

router.post('/chatroom',
    ChatroomController.chatroom
);

module.exports = router;