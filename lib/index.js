const tcomb = require('tcomb-validation');
const { validation, error } = require('./utils');
const chalk = require('chalk');

function Validate(SCHEMA, OPTIONS = { active: true, verboseErrors: false, logging: false }) {
  // Validate that the schema is a tcomb object

  if (validation.isNotTcomb(SCHEMA)) {
    error.isNotTcomb();
  }
  // Destruct the options object
  const settings = {
    active: true,
    verboseErrors: false,
    logging: false,
    ...OPTIONS,
  };

  const { active, verboseErrors, logging } = settings;

  return function middleware(req, res, next) {
    if (!active) return next();
    const result = tcomb.validate({ ...req.body, ...req.params, ...req.query }, SCHEMA);
    if (!result.isValid()) {
      if (verboseErrors) {
        if (logging) {
          console.log(chalk.red(JSON.stringify(result.errors)));
        }
        return res.status(400).send(result.errors);
      }
      if (logging) {
        console.log(chalk.red(JSON.stringify(result.firstError())));
      }
      return res.status(400).send(result.firstError());
    }
    return next();
  };
}

module.exports = Validate;
