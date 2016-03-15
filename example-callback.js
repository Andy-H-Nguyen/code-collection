var request = require('request');
var url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=b1b15e88fa797225412429c1c50c122a";

request({
    url: url, 
    json: true
    }, function (error, response, body) {
        if (error) {
         console.log('An error has occured');   
        } else {
         console.log(JSON.stringify(body, null, 4));
         console.log("It is " + body.main.temp + " degrees in " + body.name);
        }
    })