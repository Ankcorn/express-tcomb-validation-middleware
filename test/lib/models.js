const t = require('tcomb');

const test = t.struct({
  test: t.String,
  bool: t.Boolean,
});

module.exports = {
  test,
};
