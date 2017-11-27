let User = require('./models/user');
let bcrypt = require('bcryptjs');

module.exports = function () {
  User.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const testUser = new User({
      id: 'cikqgkv4q01ck7453ualdn3hd',
      firstName: 'test',
      lastName: 'user',
      email: 'test.user@kayak-prototype.com',
      password: bcrypt.hashSync('test', 10)
    });

    User.create([testUser], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
