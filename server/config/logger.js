'use strict';

/** @module logger */

const config = require('./config');
const bunyan = require('bunyan');
const errors = require('restify-errors');

const streams = [];

const env = process.env.NODE_ENV || 'development';

if (env === 'production') {
  // TODO: Log to file

} else if (env !== 'test') {
  const PrettyStream = require('bunyan-prettystream');
  const prettyStdOut = new PrettyStream();
  prettyStdOut.pipe(process.stdout);
  streams.push({
    level: config[env]['log']['level'],
    type: 'raw',
    stream: prettyStdOut
  });
}

module.exports = bunyan.createLogger({
  name: 'express-react-generator',
  streams: streams,
  serializers: {
    err: errors.bunyanSerializer,
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res
  }
});
