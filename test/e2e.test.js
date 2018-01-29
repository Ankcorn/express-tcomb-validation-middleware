const chai = require('chai');
const server = require('./lib');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const url = endpoint => `http://localhost:4444${endpoint}`;

describe('E2E tests', () => { // eslint-disable-line no-undef
  it('Tests posting invalid body', (done) => { // eslint-disable-line no-undef
    chai.request(server)
      .post('/test')
      .send({})
      .end((err, res)=>{
        expect(res.status).to.be.eql(400);
        expect(res.body).to.have.lengthOf(2);
        expect(res.body[0].message).to.be.eql("Invalid value undefined supplied to /test: String")
        expect(res.body[1].message).to.be.eql("Invalid value undefined supplied to /bool: Boolean")
        done()
      });
  });
  it('Tests posting valid body', (done) => { // eslint-disable-line no-undef
    chai.request(server)
      .post('/test')
      .send({test:"string",bool:false})
      .end((err, res)=>{
        expect(res.status).to.be.eql(200);
        expect(res.body.message).to.be.a("string");
        done()
      });
  });
  // it('Tests put invalid body', () => { // eslint-disable-line no-undef
  //   // Validate();
  // });
  // it('Tests put valid body', () => { // eslint-disable-line no-undef
  //   // Validate();
  // });
  // it('Tests get invalid url params', () => { // eslint-disable-line no-undef
  //   // Validate();
  // });
  // it('Tests get valid url params', () => { // eslint-disable-line no-undef
  //   // Validate();
  // });
  // it('Tests get invalid url query', () => { // eslint-disable-line no-undef
  //   // Validate();
  // });
  // it('Tests get valid url query', () => { // eslint-disable-line no-undef
  //   // Validate();
  // });
});
