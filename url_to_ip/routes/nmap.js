var express = require('express');
var body = require("body-parser");
var router = express.Router();
var nmap = require('node-nmap');
 
nmap.nmapLocation = "nmap"; //default

router.route('/nmap');



/* GET home page. */
router.get('/nmap', function(req, res, next) {
    res.render('nmap', { title: 'Scan' });
});

router.post('/nmap', function(req, res, next) {
    var dominio = req.body.urlabuscar;
    var scan = req.body.Tiposcan;
    var resultado_scaneo = "";
    
    switch(scan) {
        case 'QuickScan':
            var quickscan = new nmap.QuickScan(dominio);
            quickscan.on('complete', function(data){
                console.log(data);
            });

            quickscan.on('error', function(error){
                console.log(error);
              });

            resultado_scaneo = quickscan.startScan();
            res.send(resultado_scaneo);
            break;
        case 'NmapScan':
            var nmapscan = new nmap.NmapScan(dominio);
            nmapscan.on('complete', function(data){
                console.log(data);
            });

            nmapscan.on('error', function(error){
                console.log(error);
              });

            resultado_scaneo = nmapscan.startScan();
            res.send(resultado_scaneo);
            break;
        case 'OsAndPortScan':
            var ospscan = new nmap.OsAndPortScan(dominio);
            ospscan.on('complete', function(data){
                console.log(data);
            });

            ospscan.on('error', function(error){
                console.log(error);
              });

            resultado_scaneo = nmapscan.startScan();
            res.send(resultado_scaneo);
            break;
    }
    

});

module.exports = router;