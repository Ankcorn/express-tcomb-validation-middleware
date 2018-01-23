// Tests the middleware library to ensure the configuration options have the
// desired affect.
const { expect } = require('chai');
const { error, validation } = require('../lib/utils');
const { struct, String } = require('tcomb');

describe('Error module tests', () => { // eslint-disable-line no-undef
  it('Scenario: tests is not tcomb object error message', () => { // eslint-disable-line no-undef
    try {
      error.isNotTcomb();
    } catch (e) {
      expect(e.message, 'Validation argument SCHEMA is not a tcomb struct');
    }
  });
});

describe('isTcomb tests', () => { // eslint-disable-line no-undef
  it('Scenario: Object is tcomb', () => { // eslint-disable-line no-undef
    const tcombObject = struct({ test: String });
    expect(validation.isTcomb(tcombObject), true);
  });
  it('Object is not tcomb', () => { // eslint-disable-line no-undef
    const notTcombObject = { test: String };
    expect(validation.isTcomb(notTcombObject), false);
  });
});
