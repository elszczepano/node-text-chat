exports.home = (req, res) => {
    res.render('home');
};
exports.chatroom = (req, res) => {
    if(req.body.room === "" || req.body.nickname === "") {
        res.redirect('/');
    }
    res.redirect(`chatroom/${req.body.room}`);

};
// exports.renderView = (req, res) => {
//     res.render('chatroom', {
//         nickname: req.body.nickname,
//         room: req.body.room
//     });
// };