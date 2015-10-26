var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('main', { title: 'Main' });
});

router.get('/menu', function(req, res) {
    res.render('menu', { title: 'Menu' });
});

router.get('/shop', function(req, res) {
    res.render('shop', { title: 'Shop' });
});

router.get('/chat', function(req, res) {
    res.render('chat', { title: 'Chat' });
});

module.exports = router;