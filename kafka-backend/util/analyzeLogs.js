import {Router} from 'express';

const router = new Router();
const logger = require('../logger');

// Get Cities
router.get('/clicksPerPage', function (req, res, next) {
  const options = {
    /*from: new Date() - (24 * 60 * 60 * 1000),
    until: new Date(),
    limit: 10,
    start: 0,
    order: 'desc',*/
    fields: ['page'],
  };

  logger.query(options, function (err, results) {
    let clicksPerPageCount = {
      Car: 0,
      Hotel: 0,
      Flight: 0,
      Booking: 0,
    };
    if (err) {
      res.status(500).json({
        status: 500,
        title: 'Internal server error.',
        error: {message: 'Failed to fetch logs.'},
      })
    }
    console.log(results);
    for (result in results) {
      switch (result.page) {
        case 'Car':
          ++clicksPerPageCount.Car;
          break;
        case 'Hotel':
          ++clicksPerPageCount.Hotel;
          break;
        case 'Flight':
          ++clicksPerPageCount.Flight;
          break;
        case 'Booking':
          ++clicksPerPageCount.Booking;
          break;
      }
    }
    res.status(200).json({
      status: 200,
      title: 'Logs data retrieved.',
      error: {message: 'Successfully retrieved clicks per page count.'},
    })
  });
});


export default router;
