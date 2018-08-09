const Message = require('../models/message');

exports.home = (req, res) => {
    res.render('home');
};

exports.chatroom = (req, res) => {
    if(req.body.room === "" || req.body.nickname === "") {
        res.redirect('/');
    }
    Message.find().where('room').equals(req.body.room).exec((err, messages) => {
        res.render('chatroom', {
            nickname: req.body.nickname,
            room: req.body.room,
            messages: messages
        });
    });
};

exports.addMessageToDatabase = (req, res) => {
    let message = new Message();
    message.name = req.body.name,
    message.message = req.body.message,
    message.room = req.body.room

    message.save(err => {
        if(err) {
            console.log(err);
            return;
        }
    });
};