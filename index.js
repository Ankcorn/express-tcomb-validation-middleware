/**
 * @module express-tcomb-validation-middleware
 */

const validation = require('./lib');

/**
 * Express Tcomb Validation Middleware
 * @param { Object} Schema The schema that is being validated against
 * @param { Object} Options Optional
 * @return { Func } Express middleware function
 *
 */

module.exports = validation;
