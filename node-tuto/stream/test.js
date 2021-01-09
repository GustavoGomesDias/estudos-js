const EventEmitter = require('events');
const fs = require('fs');
const Stream = require('stream');

const writeStream = fs.createWriteStream('test.txt');

const readableStream = new Stream.Readable({
  read(){}
});

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
  readableStream.pipe(writeStream);
  readableStream.push(value);
});

// Não sei como fazer sair