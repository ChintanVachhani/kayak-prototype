let connection = new require('./kafka/Connection');
let producer = connection.getProducer();

let user = require('./services/user.services');
let car = require('./services/car.services');
let flight = require('./services/flight.services');
let hotel = require('./services/hotel.services');
let booking = require('./services/booking.services');

let userConsumer = connection.getConsumer('userTopic');
let carConsumer = connection.getConsumer('carTopic');
let flightConsumer = connection.getConsumer('flightTopic');
let hotelConsumer = connection.getConsumer('hotelTopic');
let bookingConsumer = connection.getConsumer('bookingTopic');

let mysql = require('./mysql');
let mongo = require('./mongo');

console.log('kafka-server is running');

userConsumer.on('message', function (message) {
  console.log('message received');
  console.log(JSON.stringify(message.value));
  let data = JSON.parse(message.value);
  user.handle_request(data.data, function (err, res) {
    console.log('after handle', res);
    let payloads = [
      {
        topic: data.replyTo,
        messages: JSON.stringify({
          correlationId: data.correlationId,
          data: res,
        }),
        partition: 0,
      },
    ];
    producer.send(payloads, function (err, data) {
      console.log(data);
    });
    return;
  });
});

carConsumer.on('message', function (message) {
  console.log('message received');
  console.log(JSON.stringify(message.value));
  let data = JSON.parse(message.value);
  car.handle_request(data.data, function (err, res) {
    console.log('after handle', res);
    let payloads = [
      {
        topic: data.replyTo,
        messages: JSON.stringify({
          correlationId: data.correlationId,
          data: res,
        }),
        partition: 0,
      },
    ];
    producer.send(payloads, function (err, data) {
      console.log(data);
    });
    return;
  });
});

flightConsumer.on('message', function (message) {
  console.log('message received');
  console.log(JSON.stringify(message.value));
  let data = JSON.parse(message.value);
  flight.handle_request(data.data, function (err, res) {
    console.log('after handle', res);
    let payloads = [
      {
        topic: data.replyTo,
        messages: JSON.stringify({
          correlationId: data.correlationId,
          data: res,
        }),
        partition: 0,
      },
    ];
    producer.send(payloads, function (err, data) {
      console.log(data);
    });
    return;
  });
});

hotelConsumer.on('message', function (message) {
  console.log('message received');
  console.log(JSON.stringify(message.value));
  let data = JSON.parse(message.value);
  hotel.handle_request(data.data, function (err, res) {
    console.log('after handle', res);
    let payloads = [
      {
        topic: data.replyTo,
        messages: JSON.stringify({
          correlationId: data.correlationId,
          data: res,
        }),
        partition: 0,
      },
    ];
    producer.send(payloads, function (err, data) {
      console.log(data);
    });
    return;
  });
});

bookingConsumer.on('message', function (message) {
  console.log('message received');
  console.log(JSON.stringify(message.value));
  let data = JSON.parse(message.value);
  booking.handle_request(data.data, function (err, res) {
    console.log('after handle', res);
    let payloads = [
      {
        topic: data.replyTo,
        messages: JSON.stringify({
          correlationId: data.correlationId,
          data: res,
        }),
        partition: 0,
      },
    ];
    producer.send(payloads, function (err, data) {
      console.log(data);
    });
    return;
  });
});
