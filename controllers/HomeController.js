exports.index = function(request, res, next){
    res.render('index', { title: 'Express JS' });
}