const request = require('request');
const config = require('../config.js');

const geocodeAddress = (address) => {
    let ADDRESS = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${ADDRESS}&key=${config.KEY}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            console.log('Unable to connect to Google servers.');
        } else if(body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address.');
        } else if(body.status === 'OK') {
            // console.log(JSON.stringify(response, undefined, 2));
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
            console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }

    });
};

module.exports.geocodeAddress = geocodeAddress;