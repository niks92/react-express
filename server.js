require('dotenv').config();

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const Patient = require('./server/models/patient');
const errorHandler = require('./server/responseHandlers/errorHandler');
const router = require('./server/router'); 
const bodyParser = require('body-parser');

const port = process.env.PORT || 3002;

console.log(process.env.NODE_ENV)

const app = express();

const compiler = webpack(webpackConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use('/css', express.static(__dirname + '/client/css'));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description, Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {

    res.status(200).send();

  } else {

    // Pass to next layer of middleware
    next();

  }
});

router(app);  

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/html/index.html'));
});


// errors
app.use(errorHandler);

app.listen(port, function () {
  console.log("listening on port: "+ port);
});
