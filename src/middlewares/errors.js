exports.notFound = (req, res, next) => {
    res.render('error', {
        message: '404 page not found'
    });
};
