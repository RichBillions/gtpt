const express = require('express');
const ejs = require('ejs');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const fs = require('fs');
const resolve = file => path.resolve(__dirname, file);
// const Window = require('window');
// const window = new Window();

const isProd = process.env.NODE_ENV === 'production';

//var index = require('./routes/index');
//var users = require('./routes/users');

const app = express();

app.disable('x-powered-by');

app.use(compression());


app.use(function (req, res, next) {
    console.log('环境', process.env.NODE_ENV);
    console.log('环境', req.app.get('env'))
    next();
});

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})


app.use(favicon('./src/assets/images/logo.png'));
app.use('/', serve('./dist', true));
app.use('/assets', serve('./src/assets', true));

app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
