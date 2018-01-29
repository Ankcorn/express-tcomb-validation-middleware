const express = require('express');
const bodyParser = require('body-parser');
const t = require('../../index');
const { test } = require('./models');

const app = express();

app.use(bodyParser.json());

app.post('/test', t(test), (req, res) => {
  res.send({ message: 'schema was obviously valid' });
});

app.put('/test', t(test, { active: false }), (req, res) => {
  res.send({ message: 'was not validated', body: req.body });
});

app.get('/test/:test/:bool', t(test, { verboseErrors: false }), (req, res) => {
  res.send('schema was obviously valid');
});

module.exports = app.listen(4444, () => console.log('Test server started on port 4444'));
