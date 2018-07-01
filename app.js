const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=22%20oakhill%20avenue%20seekonk&key=AIzaSyCY6oMaNbK50IaV04fuKFwWDfeSm1L3kbc',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(response, undefined, 2));
});