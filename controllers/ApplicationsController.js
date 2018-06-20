exports.store = (req, res) => {
    res.json( {
        'nickname': req.body.nickname,
        'room': req.body.room
    });
};

exports.ifDataExists = (req, res, next) => {
    if(req.body.room === "" || req.body.nickname === "") {
        res.redirect('/');
    }
    next();
};