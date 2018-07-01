const yargs = require('yargs');
const axios = require('axios');
const config = require('./config.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let ADDRESS = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${ADDRESS}&key=${config.MAPS_KEY}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/4e771cce3c30d4d7ad4a89895777c260/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);

}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}°F, though it feels like ${apparentTemperature}°F.`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }

});




