var express = require('express');
var body = require("body-parser");
var router = express.Router();
const nmap = require('node-nmap');
 
nmap.nmapLocation = "nmap"; //default

//router.route('/nmap');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('nmap', { title: 'Scan' });
});

router.post('/', function(req, res, next) {
    var dominio = req.body.urlabuscar;
    var scan = req.body.tiposcan;
  
    
    switch(scan) {
        case 'QuickScan':
            var quickscan = new nmap.QuickScan(dominio);
            
            quickscan.startScan();
            
            quickscan.on('complete', function(data){
                console.log(data);
                res.send(data);
                
            });

            quickscan.on('error', function(error){
                console.log(error);
              });

            
             
            break;
        case 'NmapScan':
            var nmapscan = new nmap.NmapScan(dominio);
            
            nmapscan.startScan();

            nmapscan.on('complete', function(data){
                console.log(data);
                res.send(data);              
            });

            nmapscan.on('error', function(error){
                console.log(error);
              });

            break;
        case 'OsAndPortScan':
            var ospscan = new nmap.OsAndPortScan(dominio);
            
            ospscan.startScan();

            ospscan.on('complete', function(data){
                console.log(data);
                res.send(data);
                
            });

            ospscan.on('error', function(error){
                console.log(error);
              });

            break;
    }
    

});

module.exports = router;