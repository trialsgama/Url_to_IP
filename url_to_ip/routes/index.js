var express = require('express');
var body = require("body-parser");
var router = express.Router();
var net = require('net');

var lista = require('../lista');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Buscar_url', { title: 'Url to IP' });
});

router.post('/', function(req, res, next) {
    var dominio = req.body.urlabuscar;
    var protocolo = req.body.protocolo;
    var banner = "";
    



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
    client.connect(protocolo, dominio, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("connected");

    });
    client.on('data', function(info) {

        console.log('Received: ' + info);
        banner += info;
        console.log(banner);
        switch(protocolo) {
            case "21":
                    banner = banner.substring(5);
                    banner = banner.split(')');
                    if(lista[banner]) {
                        console.log('Es vulnerable');
                    }
                    res.send(banner[0]);
                    break
            case "22":
                    banner = banner.substring(5);
                    banner = banner.split(')');
                    if(lista[banner]) {
                        console.log('Es vulnerable');
                    }
                    res.send(banner[0]);
                    break
            case "23":
                    banner = banner.substring(5);
                    banner = banner.split(')');
                    if(lista[banner]) {
                        console.log('Es vulnerable');
                    }
                    res.send(banner[0]);
                    break
            case "25":
                banner = banner.substring(5);
                banner = banner.split(')');
                if(lista[banner]) {
                    console.log('Es vulnerable');
                }
                res.send(banner[0]);
                break
        }
        
        
        
    });

    /*
    console.log
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