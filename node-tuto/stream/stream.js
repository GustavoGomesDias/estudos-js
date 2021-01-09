// Readable e Writable

const Stream = require('stream');

const readableStream = new Stream.Readable({
  read(){}
});

const writableStream = new Stream.Writable;

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
};

// Fornece a saída de readableStream para writableStream, que é o destino
readableStream.pipe(writableStream);
readableStream.push('hi!');
readableStream.push('ho!');

// Ou podemos usar o evento readable
readableStream.on('readable', () => {
  console.log(readableStream.read());
});