// Piping

const fs = require("fs");

// Create a readable stream
const readerStream = fs.createReadStream('input.txt');

// Create a writable stream
const writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// Leia input.txt e grave os dados em output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");