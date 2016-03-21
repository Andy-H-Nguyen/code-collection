// function doWork (data, callback) 
// {
//     callback('done');
// }

// function doWorkPromise (data)
// {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function() {
//             reject('everything broke');
//             }, 1000);
        
//         // reject({
//         //     error: "something bad happened"
//         // }); 
//     });
// }

// doWorkPromise('some data').then(function (data) {
//     console.log(data); 
// }, function(error) 
// {
//     console.log(error);
// });

var request = require('request');

function getWeather (location) {
    return new Promise(function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation + "&units=metric&appid=b1b15e88fa797225412429c1c50c122a";
        request({
        url: url, 
        json: true
        }, function (error, response, body) {
            if (error) {
             reject('An error has occured');   
            } else {
             //console.log(JSON.stringify(body, null, 4));
             resolve("It is " + body.main.temp + " degrees in " + body.name);
            }
        })
    });
}

getWeather('new york').then(function (data) {
    console.log(data); 
}, function(error) {
    console.log(error);
});