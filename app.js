const request = require('request');
const config = require('./config.js');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + config.ADDRESS + '&key=' + config.KEY,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(response, undefined, 2));
});