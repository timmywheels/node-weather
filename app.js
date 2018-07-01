const yargs = require('yargs');

const geocode = require('./geocode/geocode');1
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

// console.log(encodeURIComponent(argv.a));
geocode.geocodeAddress(argv.address);


