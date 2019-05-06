var getHTML = require('./https_withCallbacks');

var printHTML = function printHTML (potato) {
    console.log(potato);
  }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML)