// OpenWeatherMap API call
let request = require('request');

// OpenWeatherMap API key
// variable = apiKey
// assigned it to string value of API Key
let apiKey = '8a1a3cc956c204ebbbd40834bdd9dc38';

// Created a city and assigned it a string value
// of the city of Sydney to test with
let city = 'Sydney';

// Created a variable named url
// assigned it to OpenWeatherMap URL
// two query parameters:
// 1. city
// 2. apiKey
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


// pass in target url & request returns callback function
// require request package
//const request = require('request');

// request returns a callback function
// arguments: err, response, and body.
request(url, function (err, response, body) {
  // check for error in request
  if(err){
    // if an error exists, it will be logged
    console.log('error:', error);
  } else {
    // if no error exists, log the content of the response body
    console.log('body:', body);
  }
});
