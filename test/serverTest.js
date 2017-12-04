let request = require('request'), express = require('express'), assert = require("assert"), http = require("http");

let serverURL = 'http://localhost:8000';
let token;
let userId;
let origin = "Los Angeles,California";
let dest = "Philadelphia,Pennsylvania";
let minPrice = 20;
let maxPrice = 1000;
let minArrivalTime = 1100;
let maxArrivalTime = 2300;
let minDepartureTime = 1100;
let maxDepartureTime = 2300;


describe('kayak-prototype test', function () {

  it('should signup', function (done) {
    request({
      url: serverURL + '/user/signup',
      method: 'POST',
      json: {
        firstName: 'Mocha',
        lastName: 'Test',
        email: 'mocha@test.com',
        password: 'mocha',
      },
    }, function (err, res, body) {
      assert.equal(201, res.status);
      done();
    })
  });

  it('should signin', function (done) {
    request({
      url: serverURL + '/user/signin',
      method: 'POST',
      json: {
        email: 'mocha@test.com',
        password: 'mocha',
      },
    }, function (err, res, body) {
      assert.equal(200, res.status);
      token = body.token;
      userId = body.userId;
      done();
    })
  });

  it('should return user information', function (done) {
    http.get(serverURL + '/user?userId=' + userId + '&token=' + token, function (res) {
      assert.equal(200, res.status);
      done();
    })
  });

  it('should return error because user already exists', function (done) {
    request({
      url: serverURL + '/user/signup',
      method: 'POST',
      json: {
        firstName: 'Mocha',
        lastName: 'Test',
        email: 'mocha@test.com',
        password: 'mocha',
      },
    }, function (err, res, body) {
      assert.equal(400, res.status);
      done();
    })
  });

  it('should return error because invalid user credentials', function (done) {
    request({
      url: serverURL + '/user/signin',
      method: 'POST',
      json: {
        email: 'mocha@test.com',
        password: 'test',
      },
    }, function (err, res, body) {
      assert.equal(401, res.status);
      done();
    })
  });


  it('should return user account information', function (done) {
    http.get(serverURL + '/user/mocha@test.com', function (res) {
      assert.equal(200, res.status);
      done();
    })
  });

  it('should return cars matched to criteria', function (done) {
    http.get(serverURL + '/car/search?location=' + dest, function (res) {
      assert.equal(200, res.status);
      done();
    })
  });

  it('should return flight matched to criteria', function (done) {
    http.get(serverURL + '/flight/search?origin=' + origin + '&destination=' + dest, function (res) {
      assert.equal(200, res.status);
      done();
    })
  });

  it('should return hotels matching criteria', function (done) {
    http.get(serverURL + '/hotel/search?city=' + dest, function (res) {
      assert.equal(200, res.status);
      done();
    })
  });

  it('should return cars matched to filters', function (done) {
    http.get(serverURL + '/car/search?minPrice=10&maxPrice=100&class=Intermediate', function (res) {
      assert.equal(200, res.status);
      done();
    })
  });

  it('should return flight matched to filters', function (done) {
    http.get(serverURL + '/flight/search?minPrice=' + minPrice + '&maxPrice=' + maxPrice
      + '&minArrivalTime=' + minArrivalTime + '&maxArrivalTime=' + maxArrivalTime
      + '&minDepartureTime=' + minDepartureTime + '&maxDepartureTime=' + maxDepartureTime, function (res) {
      assert.equal(200, res.status);
      done();
    })
  });

  it('should return hotels matching filters', function (done) {
    http.get(serverURL + '/hotel/search?minPrice=' + minPrice + '&maxPrice=' + maxPrice
      + '&star=2', function (res) {
      assert.equal(200, res.status);
      done();
    })
  });

});
