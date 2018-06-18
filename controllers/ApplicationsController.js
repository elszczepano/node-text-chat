exports.store = (req, res) => {
    res.json( {
        'nickname': req.body.nickname,
        'room': req.body.room
    });
};