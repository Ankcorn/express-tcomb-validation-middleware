const t = require('tcomb');

const test = t.struct({
  test: t.String,
  bool: t.Boolean,
});

const ShortString = t.refinement(t.String, s => s.length < 3);

ShortString.getValidationErrorMessage = value => {
  if (!value) {
    return 'Required';
  }
  if (value.length >= 3) {
    return 'Too long my friend';
  }
  return '';
};

const getTest = t.struct({
  test: t.String,
  bool: ShortString,
});

module.exports = {
  test,
  getTest,
};
