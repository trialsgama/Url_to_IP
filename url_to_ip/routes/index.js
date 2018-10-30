var express = require('express');
var router = express.Router();
const dns = require('dns');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Buscar_url', { title: 'Url to IP' });
});

module.exports = router;