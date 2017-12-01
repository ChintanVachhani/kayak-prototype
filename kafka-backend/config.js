const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/kayak-prototype',
  database: {
    name: 'kayak_prototype',
    username: 'root',
    password: 'root',
  },
};

module.exports = config;
