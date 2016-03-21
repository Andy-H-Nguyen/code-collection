var request = require('request');

module.exports = function(location, callback) {
    var encodedLocation = encodeURIComponent(location);
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation + "&units=metric&appid=b1b15e88fa797225412429c1c50c122a";
    request({
    url: url, 
    json: true
    }, function (error, response, body) {
        if (error) {
         callback('An error has occured');   
        } else {
         //console.log(JSON.stringify(body, null, 4));
         callback("It is " + body.main.temp + " degrees in " + body.name);
        }
    })
}