var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
    .command('create', 'Greets the user', function (yargs){
      yargs.options({
            location: {
                demand: false,
                alias: 'l',
                description: 'Your location goes here',
                type: 'string'
                }
         }).help('help')
    }).help('help').argv;
    
var lookupLocation;

if (typeof argv.l === 'string' && argv.l.length > 0) 
{
    console.log("Location given");
    lookupLocation = argv.l;
    console.log("Location is " + lookupLocation);

    weather(lookupLocation, function (currentWeather) {
        console.log(currentWeather);
    });
} else {
    console.log("No location given");
    location(function (location) {
        if (!location) {
            console.log("could not find location");
            return;
        }
        lookupLocation = location.city;
        console.log("Location is " + lookupLocation);

        weather(lookupLocation, function (currentWeather) {
            console.log(currentWeather);
        });
    });
}


