let connection = new require('./kafka/Connection');
let producer = connection.getProducer();

let user = require('./services/user.services');

let userConsumer = connection.getConsumer('userTopic');

let mongoose = require('mongoose');
let dummyData = require('./dummyData');
let serverConfig = require('./config');

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  // feed some dummy data in DB.
  dummyData();
});


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
