import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = new Router();

// User Sign up
router.route('/signup').post(UserController.signup);

// User Sign in
router.route('/signin').post(UserController.signin);

// Get All Users
router.route('/').get(UserController.getAllUsers);

// Get User
router.route('/:email').get(UserController.getUser);

// Delete User
router.route('/:email').delete(UserController.deleteUser);

// Update User
router.route('/:email').patch(UserController.updateUser);

export default router;
