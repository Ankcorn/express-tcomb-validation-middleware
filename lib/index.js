function Validate(SCHEMA = {}, OPTIONS = {}) {
  return function middleware(req, res, next) {
    console.log(SCHEMA, OPTIONS);
    next();
  };
}

module.exports = Validate;
