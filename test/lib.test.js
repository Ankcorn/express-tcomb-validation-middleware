// Tests the middleware library to ensure the configuration options have the
// desired affect.
const { expect } = require('chai');
const { error, validation } = require('../lib/utils');
const { struct, String } = require('tcomb');
const middleware = require('../lib');

describe('Error module tests', () => { // eslint-disable-line no-undef
  it('Scenario: tests is not tcomb object error message', () => { // eslint-disable-line no-undef
    try {
      error.isNotTcomb();
    } catch (e) {
      expect(e.message).to.be.eql('Validation argument SCHEMA is not a tcomb struct');
    }
  });
});

describe('isTcomb tests', () => { // eslint-disable-line no-undef
  it('Scenario: Object is tcomb', () => { // eslint-disable-line no-undef
    const tcombObject = struct({ test: String });
    expect(validation.isNotTcomb(tcombObject)).to.be.eql(false);
  });
  it('Object is not tcomb', () => { // eslint-disable-line no-undef
    const notTcombObject = { test: String };
    expect(validation.isNotTcomb(notTcombObject)).to.be.eql(true);
  });
});

describe('Tests invalid schema object being added', () => { // eslint-disable-line no-undef
  it('The schema object is invalid', () => { // eslint-disable-line no-undef
    try {
      middleware({ dummyobject: 'nottcomb' });
    } catch (e) {
      expect(e.message).to.be.eql('Validation argument SCHEMA is not a tcomb struct');
    }
  });
  it('The schema object is valid', () => { // eslint-disable-line no-undef
    try {
      const tcombObject = struct({ test: String });
      middleware(tcombObject);
    } catch (e) {
      throw new Error('If this is called the test\'s have failed');
    }
  });
});
