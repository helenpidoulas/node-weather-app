// request returns a callback function
const request = require('request');

// Yargs lets you define variables from the command line
// so that a city can be selected
// Yargs exposes variables used on the argv object
const argv = require('yargs').argv;

// OpenWeatherMap API key
// variable = apiKey
// assigned it to string value of API Key
let apiKey = '8a1a3cc956c204ebbbd40834bdd9dc38';

// default city (city flag = c)
// Sydney will be shown if a a city name isn't entered
let city = argv.c || 'Sydney';

// Created a variable named url
// assigned it to OpenWeatherMap URL
// two query parameters:
// 1. city
// 2. metric units - temp
// 3. API key
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

// pass in target url & request returns callback function
// arguments: err, response, and body.
request(url, function (err, response, body) {

  // check for error in request
  if(err){

    // if an error exists, log it
    console.log('error:', error);
  } else {

    // clean up response
    let weather = JSON.parse(body);

    // find data in object using bracket notation
    // message string: show data in weather object
    let message = `${weather.name} temperature is ${weather.main.temp} degrees.`;

    // log content in response body
    console.log(message);
  }
});
