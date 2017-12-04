import {Router} from 'express';
import * as UserController from '../controllers/user.controller';
import cacheClient from '../redis';
import * as jwt from "jsonwebtoken";

const router = new Router();

// User Sign up
router.route('/signup').post(UserController.signup);

// User Sign in
router.route('/signin').post(UserController.signin);

// Add card to User Detail
router.route('/addCard').post(UserController.addCard);

// Add card to User Detail
router.route('/deleteCard').delete(UserController.deleteCard());


// Get All Users
router.route('/').get(cacheAllUsers, UserController.getAllUsers);

// Get User
router.route('/:email').get(cacheUser, UserController.getUser);


// Session Authentication
router.use('/', function (req, res, next) {
  jwt.verify(req.headers.token, 'admin', function (error, decoded) {
    if (error) {
      return res.status(401).json({
        title: 'Not Authenticated.',
        error: error,
      });
    }
    next();
  });
});

// Get All Users
router.route('/').get(cacheAllUsers, UserController.getAllUsers);

// Delete User
router.route('/:email').delete(UserController.deleteUser);

// Update User
router.route('/:email').patch(UserController.updateUser);

function cacheUser(req, res, next) {

  cacheClient.get(req.params, function (error, data) {
    if (error) {
      console.error(error);
    }
    if (data != null) {
      console.info('Cache Hit!');
      res.json(JSON.parse(data));
    } else {
      console.info('Cache Miss!');
      next();
    }
  });
}

function cacheAllUsers(req, res, next) {

  cacheClient.get('allUsers', function (error, data) {
    if (error) {
      console.error(error);
    }
    if (data != null) {
      console.info('Cache Hit!');
      res.json(JSON.parse(data));
    } else {
      console.info('Cache Miss!');
      next();
    }
  });
}

export default router;
