var express = require('express');
var router = express.Router();

let homeController = require('../controllers/HomeController');
let blogController = require('../controllers/BlogController');

/* GET home page. */
router.get('/', homeController.index);

/**
 * Blog Routes
 */
router.get('/blog/view/:id', blogController.view);
router.get('/blog/create', blogController.create);
router.post('/blog/submit', blogController.submit);

module.exports = router;
