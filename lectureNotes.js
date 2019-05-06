//Protocols : ftp, smtp, http, https, nntp

//"cat" command displays the content of the file

//Cookie information is always placed in the page headers

var request = require('request');

var getUrl = function(showId, option) {

    var options = {
        cast: '/cast',
        seasons: '/seasons';
    }

}

var sendRequest = function(url, calback) {
    request(url, function(error, response, body){
        //if everything is fine with the request
        if (!error && response && response.statusCode = 200) {
            // executing the callback function and send the request
            callback(JSON.parse(body));
        } else {
            console.log('error: ', error);
        }
    })
}

var getShowInfo = function (showId, callback) {
    sendRequest(getUrl(showId), callback)
}

var getCastInfo = function(showId, callback) {
sendRequest(getUrl(showId), callback)

}