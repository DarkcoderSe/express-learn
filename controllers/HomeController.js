const models = require('../models')

exports.index = function(request, res, next){
    return models.Blog.findAll().then(blogs => {
        res.render('index', { blogs: blogs });
    });
}