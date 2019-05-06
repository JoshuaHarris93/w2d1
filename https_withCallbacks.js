//Printing with Parameters

var https = require('https');                               



var getHTML = function getHTML(options, callback) {

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



module.exports = getHTML;
