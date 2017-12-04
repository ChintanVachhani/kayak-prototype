let Car = require('../models/car');

const logger = require('../logger');
let jwt = require('jsonwebtoken');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;
  let decoded = jwt.decode(req.query.token);

  if (req.name === 'createCar') {
    let car = Car({
      operator: req.body.operator,
      class: req.body.class,
      price: req.body.price,
      model: req.body.model,
      capPersons: req.body.capPersons,
      capBags: req.body.capBags,
      doors: req.body.doors,
      location: req.body.location,
      carImage: req.body.carImage,
    });
    car.save(function (error) {
      if (error) {
        res = {
          status: 400,
          title: 'Invalid data.',
          error: {message: 'Failed to create car.'},
        };
        callback(null, res);
      } else {
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
    Car.findOne({_id: req.params._id}, (error, car) => {
      if (error || !car) {
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
    Car.findOneAndUpdate({_id: req.params._id}, req.body, (error, car) => {
      if (error || !car) {
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
    Car.findOneAndRemove({_id: req.params._id}, (error, car) => {
      if (error || !car) {
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

    logger.info({page: 'Car', user: decoded.user.email || ''});

    Car.find({}, (error, cars) => {
      if (error) {
        res = {
          status: 500,
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

  if (req.name === 'searchCars') {

    logger.info({page: 'Car', user: decoded.user.email || ''});

    //Naive logic - to be optimized later
    let conditions = [];
    let classConditions = [];

    if (Array.isArray(req.query.class)) {
      console.error('class', req.query.class);
      for (let i = 0; i < req.query.class.length; i++) {
        classConditions.push({class: req.query.class[i]});
      }
    } else if (req.query.class !== undefined) {
      classConditions.push({class: req.query.class});
    }

    if (req.query.location !== undefined) {
      conditions.push({location: req.query.location});
    }
    if (req.query.minPrice !== undefined) {
      conditions.push({price: {$gte: req.query.minPrice}});
    }
    if (req.query.maxPrice !== undefined) {
      conditions.push({price: {$lte: req.query.maxPrice}});
    }
    if (classConditions.length > 0) {
      console.error(classConditions);
      conditions.push({$or: classConditions});
    }

    Car.find({$and: conditions}, (error, cars) => {
      if (error) {
        res = {
          status: 500,
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
