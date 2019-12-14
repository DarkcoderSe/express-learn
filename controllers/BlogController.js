const models = require('../models')

exports.create = function(req, res, next){
    res.render('blog/create');
}

exports.submit = function(req, res, next){
    
    return models.Blog.create({
        title: req.body.title,
        content: req.body.content
    }).then(() => {
        res.redirect('/');
    });

}