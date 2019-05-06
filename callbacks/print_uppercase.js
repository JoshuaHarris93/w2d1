var getHTML = require('../https_withCallbacks');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

function uppercase(html) {
    console.log(html.toUpperCase());
}

getHTML(options, uppercase)