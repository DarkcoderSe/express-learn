const models = require('../models')

exports.create = function(req, res){
    res.render('blog/create');
}

exports.submit = function(req, res){
    
    return models.Blog.create({
        title: req.body.title,
        content: req.body.content
    }).then(() => {
        res.redirect('/');
    });

}

exports.view = function(req, res){
    return models.Blog.findOne({
        where : {
            id : req.params.id
        }
    }).then(blog => {
        res.render('blog/view', { blog: blog });
    })
}

exports.edit = function(req, res){
    return models.Blog.findOne({
        where: {
            id: req.params.id
        }
    }).then(blog => {
        res.render('blog/edit', { blog: blog });
    })
}

exports.delete = function(req, res){
    return models.Blog.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/');
    })
}

exports.update = function(req, res){
    return models.Blog.update({
        title: req.body.title,
        content: req.body.content
    }, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.redirect('/blog/edit/' + req.body.id);
    })
}