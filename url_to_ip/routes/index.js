var express = require('express');
var body = require("body-parser");
var router = express.Router();
var net = require('net');
const dns = require('dns');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Buscar_url', { title: 'Url to IP' });
});

router.post('/', function(req, res, next) {
    var dominio = req.body.urlabuscar;
    console.log(dominio);
    var family = 4;
    var protocolo = req.body.protocolo;
    var datos = "";
    console.log(protocolo);

    /*
   dns.lookup(dominio, family, (err, address) => {
        if (err) {
            console.log(err);
        }
        console.log('%j', address);
        var client = new net.Socket();
        client.connect(protocolo, address, function(err) {
            if (err) {
                console.log(err);
            }
             datos = client.setEncoding();
        });
        console.log(datos);

    });
    */

    var client = new net.Socket();
    client.connect(protocolo, dominio, function() {
        console.log("connected");

    });
    client.on('data', function(data) {

            console.log('Received: ' + data);

        })
        /*
          var ip = dns.lookup(dominio, family, (err, address) => {
              if (err) {
                  console.log(err);
              }
              return address;
          });
          */

    /*
    var client = new net.Socket();
    var conexion_servidor = client.connect(protocolo, ip, function() {
        return conexion_servidor;
    });
    console.log(conexion_servidor);

    res.write(req.body.respuesta);
    */
});

module.exports = router;