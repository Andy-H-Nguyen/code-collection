var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function(callback) {
    request({
    url: url, 
    json: true
    }, function (error, response, body) {
        if (error) {
         callback('An error has occured');   
        } else {
         //console.log(JSON.stringify(body, null, 4));
         callback(body);
        }
    })
}