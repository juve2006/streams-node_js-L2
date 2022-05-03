const stream = require('stream');
const fs = require('fs');

const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {

  }
}

module.exports = LimitSizeStream;
