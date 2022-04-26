
const { createReadStream, readFileSync} = require('fs');

const file = readFileSync('file.txt', { encoding: 'utf8' });
console.log(file);

const fileStream = createReadStream('fileCopy.txt');
fileStream.on("data", function(chunk) { 
  console.log(chunk.toString('utf8'));
});