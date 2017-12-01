let Car = require('../models/car');
let cuid = require('cuid');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;

  if (req.name === 'createCar') {
    let car = Car({
      cuid: cuid(),
      operator: req.body.operator,
      class: req.body.class,
      price: req.body.price,
      model: req.body.model,
      capPersons: req.body.capPersons,
      capBags: req.body.capBags,
      doors: req.body.doors,
      location: req.body.location,
      //carImage: req.body.carImage,
    });
    car.save(function (error) {
      if(error) {
      res = {
        status: 400,
        title: 'Invalid data.',
        error: {message: 'Failed to create car.'},
      };
      callback(null, res);
      }
      else {
      res = {
      status: 201,
      message: 'Successfully created car.',
      car: car,
    };

    callback(null, res);
      }
      
    });

    
  }

  if (req.name === 'getCar') {
    Car.findOne({cuid: req.params.cuid}, (error, car) => {
      if (error) {
        res = {
          status: 404,
          title: 'Car not found.',
          error: {message: 'Failed to retrieve car.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved car.',
          car: car,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'updateCar') {
    Car.findOneAndUpdate({cuid: req.params.cuid}, req.body, (error, car) => {
      if (error) {
        res = {
          status: 404,
          title: 'Car not found.',
          error: {message: 'Failed to update car.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully updated car.',
          car: req.body,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'deleteCar') {
    Car.findOneAndRemove({cuid: req.params.cuid}, (error, car) => {
      if (error) {
        res = {
          status: 404,
          title: 'Car not found.',
          error: {message: 'Failed to delete car.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully deleted car.',
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'getAllCars') {
    Car.find({}, (error, cars) => {
      if (error) {
        res = {
          status: 404,
          title: 'Cars not retrieved.',
          error: {message: 'Failed to retrieve cars.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved all cars.',
          cars: cars,
        };
        callback(null, res);
      }
    });
  }

}

exports.handle_request = handle_request;
