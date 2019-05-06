var getHTML = require('./https_withCallbacks');

var printHTML = function printHTML (html) {
    console.log(html);
  }

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(options, printHTML)