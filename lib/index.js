const tcomb = require('tcomb-validation');

function Validate(SCHEMA, OPTIONS = {}) {
//   if (!Object.prototype.hasOwnProperty.call(SCHEMA, 'meta') || !Object.prototype.hasOwnProperty.call(SCHEMA.meta, 'kind')) {
//     throw new Error('Validation argument SCHEMA is not a tcomb struct');
//   }
  return function middleware(req, res, next) {
    console.log(SCHEMA.displayName, OPTIONS);
    next();
  };
}

module.exports = Validate;
