let Hotel = require('../models/hotel');
let cuid = require('cuid');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;

  if (req.name === 'createHotel') {
    let hotel = Hotel({
      cuid: cuid(),
      hotelName: req.body.hotelName,
      price: {
        standard: req.body.price.standard,
        delux: req.body.price.delux,
        suite: req.body.price.suite,
      },
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
    Hotel.findOne({cuid: req.params.cuid}, (error, hotel) => {
      if (error) {
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
    Hotel.findOneAndUpdate({cuid: req.params.cuid}, req.body, (error, hotel) => {
      if (error) {
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
    Hotel.findOneAndRemove({cuid: req.params.cuid}, (error, hotel) => {
      if (error) {
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
          status: 404,
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
