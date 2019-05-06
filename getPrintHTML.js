
var https = require('https');  

  function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
    var sum = function sum(data) {
        return arr.map((a, b) => a + b)
      }
    var eachChunk = data.
        console.log(add);
    }

    https.get(requestOptions, function (response) {

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
      
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
          console.log('Chunk Received. Length:', data.length  + '\n');
        });

       
      
        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function() {
          console.log('Response stream complete.');
        });
      
      });
  
  
  }

  getAndPrintHTML ();