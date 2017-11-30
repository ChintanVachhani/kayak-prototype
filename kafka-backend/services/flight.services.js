let Flight = require('../models/flight');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;

  if (req.name === 'getSomething') {
    if(error){
      res = {
        status: 500,
        title: 'Error title.',
        error: {message: 'Error message.'},
      };
    } else {
        res = {
          status: 200,
          message: 'Success message.',
        };
    }
    callback(null, res);
  }
}

exports.handle_request = handle_request;
