let kafka = require('kafka-node');

function ConnectionProvider() {
  this.getConsumer = function (topicName) {

    //if (!this.kafkaConsumerConnection) {
    console.log('------', topicName);
    this.client = new kafka.Client("localhost:2181");
    this.kafkaConsumerConnection = new kafka.Consumer(this.client, [{topic: topicName, partition: 0}]);
    this.client.on('ready', function () {
      console.log('client ready!')
    });

        this.client.on('error', function (err) {
      console.log('client error!', err)
    });


    //}
    return this.kafkaConsumerConnection;
  };

  //Code will be executed when we start Producer
  this.getProducer = function () {

    if (!this.kafkaProducerConnection) {
      this.client = new kafka.Client("localhost:2181");
      let HighLevelProducer = kafka.HighLevelProducer;
      this.kafkaProducerConnection = new HighLevelProducer(this.client);
      //this.kafkaConnection = new kafka.Producer(this.client);
      console.log('producer ready');
    }
    return this.kafkaProducerConnection;
  };
}

exports = module.exports = new ConnectionProvider;
