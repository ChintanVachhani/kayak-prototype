const logger = require('../../kafka-backend/logger');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;

  if (req.name === 'clicksPerPage') {
    const options = {
      /*from: new Date() - (24 * 60 * 60 * 1000),
      until: new Date(),
      limit: 10,
      start: 0,
      order: 'desc',*/
      fields: ['page'],
    };

    logger.query(options, function (err, results) {
      let Car = 0, Hotel = 0, Flight = 0, Booking = 0;
      if (err) {
        res = {
          status: 500,
          title: 'Internal server error.',
          error: {message: 'Failed to fetch logs.'},
        };
        callback(null, res);
      } else {
        console.log(results);
        for (let i = 0; i < results.length; ++i) {
          console.error(results[i].page);
          switch (results[i].page) {
            case 'Car':
              ++Car;
              break;
            case 'Hotel':
              ++Hotel;
              break;
            case 'Flight':
              ++Flight;
              break;
            case 'Booking':
              ++Booking;
              break;
          }
        }
        res = {
          status: 200,
          title: 'Successfully retrieved clicks per page count.',
          data: {
            Car: Car,
            Hotel: Hotel,
            Flight: Flight,
            Booking: Booking,
          },
        };
        callback(null, res);
      }
    });
  }

  if(req.name === 'trackUser'){

  }
}

exports.handle_request = handle_request;
