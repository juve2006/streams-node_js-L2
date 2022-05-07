import { createGzip, createGunzip } from "zlib";
import fs from "fs";
import { pipeline } from "stream";

const file = './text.txt';
const zip = './text2.txt.zip'
const gzip = createGzip();
const gunzip = createGunzip();

 // zip
function zipFile (file) {
    try {
        const readStream = fs.createReadStream(file);
        let newFile = file + '.zip';
        let writeStream = fs.createWriteStream(newFile);
        readStream.pipe(gzip).pipe(writeStream);
        console.log ('File was compressed');
    } catch (err) {
        console.log('An error occurred:', err);
    }
}

// unzip
function unzipFile (file) {
    try {
        const readStream = fs.createReadStream(file);
        let newFile = file.replace('.zip', '');
        let writeStream = fs.createWriteStream(newFile);
        readStream.pipe(gunzip).pipe(writeStream);
        console.log ('File was decompressed');
    } catch (err) {
        console.log('An error occurred:', err);
    }
}

unzipFile(zip);
zipFile(file);

//Zip file solution with pipeline
// const writeStream = fs.createWriteStream(file + '.zip');
// pipeline (readStream, gzip, writeStream, (err) => {
//     if (err) {
//         console.error('An error occurred:', err);
//         process.exitCode = 1;
//     }
//     console.log ('File was compressed');
// });