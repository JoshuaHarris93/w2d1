//Printing with Parameters

var https = require('https');                               

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };


function getHTML(options, callback) {

    var eachChunk = '';
      

    https.get(options, function (response) {
        
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
      
        response.on('data', function (data) {
            
            eachChunk += data; 
          
        });
      
        response.on('end', function() {
           callback(eachChunk);
          
        });
      
      });
}

function printHTML (html) {
    console.log(html);
  }

getHTML(options, printHTML);

