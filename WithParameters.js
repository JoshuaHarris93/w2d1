//Printing with Parameters

var https = require('https');                               

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function getAndPrintHTML (options) {

  

    
    var eachChunk = '';
      

    https.get(options, function (response) {
        
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
      
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            
            eachChunk += data; 
          
        });
      
        response.on('end', function() {
            console.log('Chunk Received. Length:', eachChunk  + '\n');
            console.log('Response stream complete.');
          
        });
      
      });
    
  }


getAndPrintHTML(options);