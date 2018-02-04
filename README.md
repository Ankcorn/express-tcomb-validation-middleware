# Tcomb Validation Middleware
Express Middleware that performs runtime type checking of objects. It is primerily meant for type checking in development.

Build [![CircleCI](https://circleci.com/gh/ThomasAnkcorn/express-tcomb-validation-middleware.svg?style=svg)](https://circleci.com/gh/ThomasAnkcorn/express-tcomb-validation-middleware)

Tests [![Coverage Status](https://coveralls.io/repos/github/ThomasAnkcorn/express-tcomb-validation-middleware/badge.svg?branch=master)](https://coveralls.io/github/ThomasAnkcorn/express-tcomb-validation-middleware?branch=master)

## Installation

```
npm i tcomb-validation-middleware
```

## Usage

Use the library [tcomb](https://github.com/gcanti/tcomb) to define the model of the data structure

```
const t = require('tcomb');

const test = t.struct({
  test: t.String,
  bool: t.Boolean,
});

module.exports = {
  test,
};
```

Then add as middleware to the route of the endpoint

```
const t = require('comb-validation-middleware');

... //Express setup stuff

app.post('/test', t(test), (req, res) => {
  res.send({ message: 'schema was obviously valid' });
});
```
The module also accepts an options object like so
```
t(test,{ active: true, verboseErrors: false })
```
## Tests

To run the tests do
```
npm test
```

## Performance

Applying strict type validation to your server will decrease it's performance slightly under heavy loads but the tradeoff of very usefull error messages can make it worth it. If in production in an environment where you control the client it's very easy to reuse your tcomb schemas. This allows you to move the validation client side without much development overhead.

The results in the table below are generated using artillery.


| First Header  | Scenarios launched | Scenarios completed | Requests completed | RPS sent | Request latency | min | max | median | p95 | p99 | Scenario duration | min | max | median | p95 | p99 |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Enabled | 1000  | 1000 | 20000 |  970.87 | -> |  0.3 | 41.4 | 0.4 |  2.8 | 11.7 | -> | 14.5 | 447.2 | 18.7 | 98 | 384.6 |
| Disabled |  1000  | 1000 | 20000 | 970.4 | -> |  0.2 | 24.2 | 0.4 |  1.6 | 3.5 | -> | 11 | 124.8 | 16.6 | 48.6 | 108.1 |

If you would like to verify them clone the module from git then run the following commands.

```
cd express-tcomb-validation-middleware
npm install
node ./test/lib/index.js
```
Then in another window run
```
npm install -g artillery
artillery quick --count 1000 -n 20 http://localhost:4444/test/on/test/hi
artillery quick --count 1000 -n 20 http://localhost:4444/test/off/test/hi

```

## Built with

* [Tcomb-Validation](https://github.com/gcanti/tcomb-validation) - Javascript object validation library

## Contributing

Make a github issue if you have any feature requests or problems. I welcome pull requests as long as they have the relevent tests included.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details