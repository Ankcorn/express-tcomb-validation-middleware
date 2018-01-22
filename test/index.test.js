// Tests library entry point to ensure success on npm install
const Validate = require('../index');

describe('Tests', () => { // eslint-disable-line no-undef
  it('Tests Nothing', () => { // eslint-disable-line no-undef
    const sum = x => y => x + y;
    sum(3, 4);
  });
  it('Tests the validate function', () => { // eslint-disable-line no-undef
    Validate();
  });
});
