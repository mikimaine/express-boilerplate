var express = require('express');


var router = express.Router();

var indexRouter = require('./v1/index');
var usersRouter = require('./v1/users');
var authRouter = require('./v1/auth');

router.use('/', indexRouter);
router.use('/users', usersRouter); // autho
router.use('/auth', authRouter);

module.exports = router;
