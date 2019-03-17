// pass in target url & request returns callback function
// require request package
const request = require('request');

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
