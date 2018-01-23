/**
 * @module errors
 */

// TODO consider module reveal pattern if shared logic starts to be used for errors


function isNotTcomb() {
  throw new Error('Validation argument SCHEMA is not a tcomb struct');
}

module.exports = {
  isNotTcomb,
};


