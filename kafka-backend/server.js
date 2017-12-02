let connection = new require('./kafka/Connection');
let producer = connection.getProducer();

let user = require('./services/user.services');

let userConsumer = connection.getConsumer('userTopic');

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
