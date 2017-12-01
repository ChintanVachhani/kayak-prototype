import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = new Router();

// User Sign up
router.route('/signup').post(UserController.signup);

// User Sign in
router.route('/signin').post(UserController.signin);

// Get User
router.route('/:cuid').get(UserController.getUser);

// Delete User
router.route('/:cuid').delete(UserController.deleteUser);

// Update User
router.route('/:cuid').patch(UserController.updateUser);

export default router;
