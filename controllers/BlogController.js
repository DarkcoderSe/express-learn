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

exports.view = function(req, res, next){
    return models.Blog.findOne({
        where : {
            id : req.params.id
        }
    }).then(blog => {
        res.render('blog/view', { blog: blog });
    })
}