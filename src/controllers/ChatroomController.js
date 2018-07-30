const Message = require('../models/message');

exports.home = (req, res) => {
    res.render('home');
};
exports.chatroom = (req, res) => {
    if(req.body.room === "" || req.body.nickname === "") {
        res.redirect('/');
    }
    Message.find({}, function(err, messages) {
        res.render('chatroom', {
            nickname: req.body.nickname,
            room: req.body.room,
            messages: messages
        });
    });

};
