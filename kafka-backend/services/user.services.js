let User = require('../models/user');
let UserDetail = require('../models/userDetail');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
const logger = require('../logger');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;

  if (req.name === 'signup') {
    let adminFlag = false;
    if (req.body.isAdmin) {
      adminFlag = true;
    }
    let user = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      isAdmin: adminFlag,
    };

    User.create(user)
      .catch((error) => {
        res = {
          status: 400,
          title: 'Signing up failed.',
          error: {message: 'Invalid Data.'},
        };
        callback(null, res);
      })
      .then((userObj) => {
        let userDetail = UserDetail({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: user.email,
        });
        userDetail.save(function (error) {
          console.log(error);
        });
        let token;
        if (req.body.isAdmin) {
          token = jwt.sign({user: user}, 'admin', {expiresIn: 7200});
        } else {
          token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        }
        res = {
          status: 201,
          message: 'Successfully signed up.',
          token: token,
          id: userObj.email,
        };
        callback(null, res);
      });
  }

  if (req.name === 'signin') {
    User.find({where: {email: req.body.email}})
      .catch((error) => {
        res = {
          status: 401,
          title: 'Signing in failed.',
          error: {message: 'Invalid credentials.'},
        };
        callback(null, res);
      })
      .then((user) => {
        if (user) {
          if (!bcrypt.compareSync(req.body.password, user.password)) {
            res = {
              status: 401,
              title: 'Signing in failed.',
              error: {message: 'Invalid credentials.'},
            };
            callback(null, res);
          } else {
            let token;
            if (req.body.isAdmin) {
              token = jwt.sign({user: user}, 'admin', {expiresIn: 7200});
            } else {
              token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            }
            res = {
              status: 200,
              message: 'Successfully signed in.',
              token: token,
              id: user.email,
            };
            callback(null, res);
          }
        } else {
          res = {
            status: 401,
            title: 'Signing in failed.',
            error: {message: 'Invalid credentials.'},
          };
          callback(null, res);
        }
      });
  }

  if (req.name === 'getUser') {

    logger.info('User Information');

    UserDetail.findOne({email: req.params.email}, (error, user) => {
      if (error || !user) {
        res = {
          status: 404,
          title: 'User not found.',
          error: {message: 'Failed to retrieve user.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved user.',
          user: user,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'updateUser') {

    logger.info('User Information');

    UserDetail.findOneAndUpdate({email: req.params.email}, req.body, (error, user) => {
      if (error || !user) {
        res = {
          status: 404,
          title: 'User not found.',
          error: {message: 'Failed to update user.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully updated user.',
          user: req.body,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'deleteUser') {

    logger.info('User Information');

    UserDetail.findOneAndRemove({email: req.params.email}, (error, user) => {
      if (error || !user) {
        res = {
          status: 404,
          title: 'User not found.',
          error: {message: 'Failed to delete user.'},
        };
        callback(null, res);
      } else {
        User.destroy({where: {email: req.params.email}});
        res = {
          status: 200,
          message: 'Successfully deleted user.',
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'getAllUsers') {
    User.find({}, (error, users) => {
      if (error) {
        res = {
          status: 500,
          title: 'Users not retrieved.',
          error: {message: 'Failed to retrieve users.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 200,
          message: 'Successfully retrieved all users.',
          users: users,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'addCard') {

    logger.info('User Information');

    let card = Card({
      cardNumber: req.body.cardNumber,
      cardName: req.body.cardName,
      expMonth: req.body.expMonth,
      expYear: req.body.expYear,
      secureCode: req.body.secureCode,
      billingDetail: {
        address: req.body.billingAddress,
        zipcode: req.body.billingZipcode,
        city: req.body.billingCity,
        state: req.body.billingState,
        country: req.body.billingCountry,
      },
    });
    UserDetail.findOne({email: req.body.email}, (error, user) => {
      if (error || !user) {
        res = {
          status: 404,
          title: 'User not found.',
          error: {message: 'Failed to update user.'},
        };
        callback(null, res);
      } else {
        card.save(function (error, card) {
          console.log(error);
          if (error || !card) {
            res = {
              status: 500,
              title: 'Card not added.',
              error: {message: 'Failed to add card to user account.'},
            };
            callback(null, res);
          } else {
            user.cards.push(card);
            res = {
              status: 201,
              message: 'Successfully added card.',
            };
            callback(null, res);
          }
        });
      }
    });
  }

}

exports.handle_request = handle_request;
