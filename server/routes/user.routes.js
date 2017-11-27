import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = new Router();

// User Sign up
router.route('/signup').post(UserController.signup);

// User Sign in
router.route('/signin').post(UserController.signin);

export default router;
