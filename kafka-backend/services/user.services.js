let User = require('../models/userDetail');
let bcrypt = require('bcryptjs');
let cuid = require('cuid');
let sanitizeHtml = require('sanitize-html');
let jwt = require('jsonwebtoken');

function handle_request(req, callback) {
  console.log("In handle request:" + JSON.stringify(req));

  let res;

  if (req.name === 'signup') {
    let user = User({
      id: cuid(),
      firstName: sanitizeHtml(req.body.firstName),
      lastName: sanitizeHtml(req.body.lastName),
      email: sanitizeHtml(req.body.email),
      password: bcrypt.hashSync(sanitizeHtml(req.body.password), 10),
    });
    user.save((error, user) => {
      if (error) {
        res = {
          status: 400,
          title: 'Signing up failed.',
          error: {message: 'Invalid Data.'},
        };
        callback(null, res);
      } else {
        res = {
          status: 201,
          message: 'Successfully signed up.',
          userId: user.id,
        };
        callback(null, res);
      }
    });
  }

  if (req.name === 'signin') {
    User.findOne({email: sanitizeHtml(req.body.email)}, (error, user) => {
      if (error) {
        res = {
          status: 401,
          title: 'Signing in failed.',
          error: {message: 'Invalid credentials.'},
        };
        callback(null, res);
      } else {
        if (user) {
          if (!bcrypt.compareSync(sanitizeHtml(req.body.password), user.password)) {
            res = {
              status: 401,
              title: 'Signing in failed.',
              error: {message: 'Invalid credentials.'},
            };
            callback(null, res);
          } else {
            let token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            res = {
              status: 200,
              message: 'Successfully signed in.',
              token: token,
              userId: user.id,
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
      }
    });
  }
}

exports.handle_request = handle_request;
