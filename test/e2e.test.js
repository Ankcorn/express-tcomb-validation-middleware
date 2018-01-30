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
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body).to.have.lengthOf(2);
        expect(res.body[0].message).to.be.eql('Invalid value undefined supplied to /test: String');
        expect(res.body[1].message).to.be.eql('Invalid value undefined supplied to /bool: Boolean');
        done();
      });
  });
  it('Tests posting valid body', (done) => { // eslint-disable-line no-undef
    chai.request(server)
      .post('/test')
      .send({ test: 'string', bool: false })
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body.message).to.be.a('string');
        done();
      });
  });
  it('Tests put invalid body but validation is disabled on this route', (done) => { // eslint-disable-line no-undef
    chai.request(server)
      .put('/test')
      .send({})
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        done()
      });
  });
  it('Tests get invalid url params and custom type', (done) => { // eslint-disable-line no-undef
    chai.request(server)
      .get('/test/on/hello/hello')
      .end((err, res) => {
        expect(res.status).to.be.eql(400);
        expect(res.body.message).to.eql('Too long my friend');
        done();
      });
  });
  it('Tests get invalid url query', (done) => { // eslint-disable-line no-undef
    chai.request(server)
      .get('/test?test=hello&bool=hi')
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        done();
      });
  });
});
