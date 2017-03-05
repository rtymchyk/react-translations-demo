require('babel-register');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fs = require('fs');

const index = require('./routes/index');
const { setMessages } = require('../react-translations/built.js');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const localeFiles = fs.readdirSync('locales');
const messages = { domain: 'en-US', locale_data: {} };
localeFiles.forEach((localeFile) => {
  const tokens = new RegExp("(.*)\.json").exec(localeFile);
  if (!tokens) return;
  const file = tokens[0];
  const locale = tokens[1];

  const localeData = JSON.parse(fs.readFileSync('locales/' + file, 'utf-8')).locale_data[locale];
  messages.locale_data[locale] = localeData;
});
setMessages(messages);

app.use('/', index);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
