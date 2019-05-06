var getHTML = require('../https_withCallbacks');


var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

  function reverse(html) {
    console.log(html.split('').reverse().join(''));
}

getHTML(options, reverse)
