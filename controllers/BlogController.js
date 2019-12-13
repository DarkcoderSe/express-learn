exports.create = function(req, res, next){
    res.render('blog/create');
}

exports.submit = function(req, res, next){
    console.log("Blog title", req.body.title);
    console.log("Blog content", req.body.content);

    res.redirect('../');
}