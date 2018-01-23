/**
 * Created by Thomas Ankcorn 23/1/2018
 */

/**
 * @module utils
 * Contains functions to validate inputs and display helpful error messages
 */

const error = require('./error')
const validation = require('./validation');

module.exports = {
  validation,
  error,
};
