const t = require('./lib');
const express = require('express');
const bodyParser = require('body-parser');
// const tcomb = require('tcomb');

const app = express();

app.use(bodyParser.json());

// const Dataset = tcomb.struct({
//   test: tcomb.String,
// });

app.post('/dataset', t({}, {}), (req, res) => {
  res.send(req.body);
});

app.listen(3000);
