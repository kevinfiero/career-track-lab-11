const parse = require('./parse');
const request = require('./request');
const store = require('./store');

request()
  .then(document => parse(document))
  .then(products => store(products));
