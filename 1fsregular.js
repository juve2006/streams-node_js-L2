const fs = require('fs');

//**Fs Sync**
// const fileContent = fs.readFileSync("one.txt", "utf8");
// console.log(fileContent);
// fs.mkdirSync('output');
// fs.copyFileSync('one.txt', 'output/one.txt');
// const stat = fs.statSync('output');
// console.log('File stat: ', stat);

//**Fs Async**
// fs.readFile("two.txt", "utf8", (error,data) => {
//   if(error) {
//     console.log('Error occured:', error);
//   }
//   console.log(data);
// });

fs.appendFile("two.txt", "\nHello AppendFile!", (error) => {
  if(error) {
    console.log('Error occured:', error);
  } 
  const data = fs.readFileSync("two.txt", "utf8");
  console.log(data);
});