const express = require('express');
const bodyParser = require('body-parser');
const t = require('../../index');
const { test, getTest } = require('./models');

const app = express();

app.use(bodyParser.json());

app.post('/test', t(test), (req, res) => {
  res.send({ message: 'schema was obviously valid' });
});

app.put('/test', t(test, { active: false }), (req, res) => {
  res.send({ message: 'was not validated', body: req.body });
});

app.get('/test/on/:test/:bool', t(getTest, { active: true, verboseErrors: false }), (req, res) => {
  res.send('schema was obviously valid');
});

app.get('/test/off/:test/:bool', t(getTest, { active: false, verboseErrors: false }), (req, res) => {
  res.send('schema was obviously valid');
});

app.get('/test', t(getTest, { active: true, verboseErrors: false }), (req, res) => {
  res.send('schema was obviously valid');
});

module.exports = app.listen(4444, () => console.log('Test server started on port 4444'));
