const stream = require('stream').Transform;

const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream {
  constructor(options) {
    super(options);
    this.limit = options.limit;
    this.counter = 0;
  }
  /*_transform — это приватный метод, который вызывается внутренними методами класса Transform для преобразования порции данных.
  Он принимает 3 параметра: chunk (часть данных), encoding (кодировка, если chunk это строка),
  callback (функция, которая вызывается после успешной или неудачной записи).
   */
  _transform(chunk, encoding, callback) {
    this.counter += chunk.length;
    if (this.counter > this.limit) {
      callback(new LimitExceededError());
    } else {
      callback(null,chunk);
      console.log('Chunk added: ', chunk.toString());
    }
  }
}

module.exports = LimitSizeStream;