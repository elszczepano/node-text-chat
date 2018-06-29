exports.home = (req, res) => {
    res.render('home');
};
exports.chatroom = (req, res) => {
    if(req.body.room === "" || req.body.nickname === "") {
        res.redirect('/');
    }
    res.render('chatroom', {
        nickname: req.body.nickname,
        room: req.body.room
    });
};