let Hotel = require('../models/hotel');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;

  if (req.name === 'createHotel') {
    let hotel = Hotel({
      hotelName: req.body.hotelName,
      price: req.body.price,
      star: req.body.star,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      //hotelImage: req.body.hotelImage,
    });
    hotel.save(function (error) {
      res = {
        status: 400,
        title: 'Invalid data.',
        error: {message: 'Failed to create hotel.'},
      };
      callback(null, res);
    });

    res = {
      status: 201,
      message: 'Successfully created hotel.',
      hotel: hotel,
    };

    callback(null, res);
  }

  if (req.name === 'getHotel') {
    Hotel.findOne({_id: req.params._id}, (error, hotel) => {
      if (error || !hotel) {
        res = {
          status: 404,
          title: 'Hotel not found.',
          error: {message: 'Failed to retrieve hotel.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved hotel.',
          hotel: hotel,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'updateHotel') {
    Hotel.findOneAndUpdate({_id: req.params._id}, req.body, (error, hotel) => {
      if (error || !hotel) {
        res = {
          status: 404,
          title: 'Hotel not found.',
          error: {message: 'Failed to update hotel.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully updated hotel.',
          hotel: req.body,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'deleteHotel') {
    Hotel.findOneAndRemove({_id: req.params._id}, (error, hotel) => {
      if (error || !hotel) {
        res = {
          status: 404,
          title: 'Hotel not found.',
          error: {message: 'Failed to delete hotel.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully deleted hotel.',
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'getAllHotels') {
    Hotel.find({}, (error, hotels) => {
      if (error) {
        res = {
          status: 500,
          title: 'Hotels not retrieved.',
          error: {message: 'Failed to retrieve hotels.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved all hotels.',
          hotels: hotels,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'searchHotels') {
    //Naive logic - to be optimized later
    let conditions = {};
    if (req.query.city !== null && req.query.star !== null && req.query.minPrice !== null && req.query.maxPrice !== null) {
      conditions = {
        city: req.query.city,
        star: req.query.star,
        price: {$gte: req.query.minPrice, $lte: req.query.maxPrice},
      };
    } else if (req.query.city !== null && req.query.star !== null) {
      conditions = {
        city: req.query.city,
        star: req.query.star,
      };
    } else if (req.query.city !== null && req.query.minPrice !== null && req.query.maxPrice !== null) {
      conditions = {
        city: req.query.city,
        price: {$gte: req.query.minPrice, $lte: req.query.maxPrice},
      };
    } else if (req.query.city !== null) {
      conditions = {
        city: req.query.city,
      };
    }

    Hotel.find(conditions, (error, hotels) => {
      if (error) {
        res = {
          status: 500,
          title: 'Hotels not retrieved.',
          error: {message: 'Failed to retrieve hotels.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved all hotels.',
          hotels: hotels,
        };
        callback(null, res);
      }
    });
  }

}

exports.handle_request = handle_request;
