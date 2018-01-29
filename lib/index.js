const tcomb = require('tcomb-validation');
const { validation, error } = require('./utils');

function Validate(SCHEMA, OPTIONS = { active: true, verboseErrors: true }) {
  // Validate that the schema is a tcomb object

  if (validation.isNotTcomb(SCHEMA)) {
    error.isNotTcomb();
  }
  // Destruct the options object
  const { active, verboseErrors } = OPTIONS;

  return function middleware(req, res, next) {
    if (!active) return next();
    const result = tcomb.validate({ ...req.body, ...req.params, ...req.query }, SCHEMA);
    if (!result.isValid()) {
      if (verboseErrors) {
        console.log(result.errors);
        return res.status(400).send(result.errors);
      }
      return res.status(400).send(result.firstError());
    }
    return next();
  };
}

module.exports = Validate;
