let UserDetail = require('./models/userDetail');
let bcrypt = require('bcryptjs');

module.exports = function () {
  UserDetail.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const testUser = new UserDetail({
      firstName: 'test',
      lastName: 'user',
      email: 'test.user@kayak-prototype.com',
      password: bcrypt.hashSync('test', 10),
    });

    UserDetail.create([testUser], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
};
