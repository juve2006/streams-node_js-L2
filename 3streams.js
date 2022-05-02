const { createReadStream, createWriteStream } = require('fs');
const { on } = require('events');

const source = createReadStream('file.txt', { encoding:"utf8" }); //set encoding or buffer mode by default
const destination = createWriteStream('fileCopy.txt');

source.push('3355\n'); //send to readable buffer

destination.write('hello!\n'); //write into writable stream

source.pipe(destination); //pipe two streams

source.on("data", function(chunk) {  //using events to access data chunks
  console.log(chunk);
});


// (async () => {
//   const source = createReadStream('file.txt', { encoding:"utf8", highWaterMark: 2 });
//   for await (const event of on(source, 'data')) {
//     console.log(event);
//   }
// })();

