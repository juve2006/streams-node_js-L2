const { Writable } = require('stream');
const { once, EventEmitter } = require('events');
class Counter extends Writable {
  constructor(opt) {
    super(opt);
  }

  _write(chunk, encoding, callback) {
    console.log(chunk);

    callback();
  }
}

const counter = new Counter({ highWaterMark: 2} ); //, encoding: "utf8"
//counter.setDefaultEncoding("utf8")
(async () => {
  const arr = [1, 2, 3, 23, 74, 153, 888]
  for (let i of arr) {
    const canWrite = counter.write(Buffer.from(`${i}`, 'utf8'));

    console.log(`Can we write bunch of data? ${canWrite}`);

    if (!canWrite) {
      await once(counter, 'drain');
      console.log('drain event fired.');
    }
  }
})();