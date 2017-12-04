import {Router} from 'express';
import * as UtilController from "../controllers/util.controller";
let jwt = require('jsonwebtoken');

const router = new Router();

router.use('/', function (req, res, next) {
  jwt.verify(req.query.token, 'admin', function (error, decoded) {
    if (error) {
      return res.status(401).json({
        title: 'Not Authenticated.',
        error: error,
      });
    }
    next();
  });
});

// Get clicks per page count
router.route('/clicksPerPage').get(UtilController.clicksPerPage);

export default router;
