'use strict';

/** @module httpErrorHandler */

const logger = require('../config/logger');

/**
 * Generic catch-all error handler. If any errors do not have a status code,
 * they are sent to clients as generic 500 errors.
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
module.exports = (err, req, res, next) => {
    logger.error(err);
    res.status(err.statusCode);
    res.json(err);
};