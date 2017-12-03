import {Router} from 'express';
import * as UserController from '../controllers/user.controller';
import cacheClient from '../redis';

const router = new Router();

// User Sign up
router.route('/signup').post(UserController.signup);

// User Sign in
router.route('/signin').post(UserController.signin);

// Add card to User Detail
router.route('/addCard').post(UserController.addCard);

// Get All Users
router.route('/').get(UserController.getAllUsers);

// Get User
router.route('/:email').get(cache, UserController.getUser);

// Delete User
router.route('/:email').delete(UserController.deleteUser);

// Update User
router.route('/:email').patch(UserController.updateUser);

function cache(req, res, next) {

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

export default router;
