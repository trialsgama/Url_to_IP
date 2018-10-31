var express = require('express');
var router = express.Router();
var net = require('net');
const dns = require('dns');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Buscar_url', { title: 'Url to IP' });
});

router.post('/', function(req, next) {
    var dominio = req.body.url;
    var protocolo = req.body.protocolo;
    var ip = dns.lookup(dominio);
    var client = new net.Socket();
    var conexion_servidor = client.connect(protocolo, ip, function() {
        console.log(conexion_servidor);
    });
    console.log(conexion_servidor);



});

module.exports = router;