var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('express-jwt');

const mongoose = require('./config/mongoose');
const { jwt_key } = require('./config/vars');
const { routes } = require('./config/routes');

const { hasPermissions } = require('./middlewares/auth');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

var app = express();

// open mongoose connection
mongoose.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(jwt({ secret: jwt_key, algorithms: ['HS256']})
.unless({path: routes.public})); // Auth

// login information state
app.use('/', indexRouter);
app.use('/users', usersRouter); // autho
app.use('/auth', authRouter);

module.exports = app;
