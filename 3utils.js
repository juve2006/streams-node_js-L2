const { promisify } = require('util');
const sleep = promisify(setTimeout);

(async () => {

  const ts = Date.now();

  await sleep(5000);

  console.log(Date.now()-ts);

})();

// const util = require('util');
// const fs = require('fs');

// const stat = util.promisify(fs.stat);

// (async () => {
//   const stats = await stat('file.txt');
//   console.log(stats);
//   console.log(`This file is owned by ${stats.uid}`);
// })()