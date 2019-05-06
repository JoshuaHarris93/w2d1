var getHTML = require('../https_withCallbacks');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

function lowerCase(html) {
    console.log(html.toLowerCase());
}

getHTML(options, lowerCase)