const request = require('request');
const config = require('../config.js');

const geocodeAddress = (address, callback) => {
    let ADDRESS = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${ADDRESS}&key=${config.MAPS_KEY}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('Unable to connect to Google servers.')
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else if(body.status === 'OK') {
            // console.log(JSON.stringify(response, undefined, 2));
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })

        }

    });
};

module.exports.geocodeAddress = geocodeAddress;


