var request = require('request');

function getLocation () {
    return new Promise(function (resolve, reject) {
        var url = 'http://ipinfo.io';
        request({
            url: url, 
            json: true
            }, function (error, response, body) {
                if (error) {
                 reject('An error has occured');   
                } else {
                 resolve(body);
                }
            })
        }); 
}

function getWeather (location) {
    return new Promise(function (resolve, reject) {
    var encodedLocation = encodeURIComponent(location);
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation + "&units=metric&APPID=798ad37d9e201df824076efcdee53108";
        request({
        url: url, 
        json: true
        }, function (error, response, body) {
            if (error) {
             reject('An error has occured');   
            } else {
             console.log(JSON.stringify(body, null, 4));
             resolve("It is " + body.main.temp + " degrees in " + body.name);
            }
        })
    })
}

getLocation().then(function (message) {
    console.log(message.city);
    return getWeather(message.city);
}).then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
});