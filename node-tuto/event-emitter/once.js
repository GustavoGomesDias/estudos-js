const event = require('events');

const meuEmissor = new event.EventEmitter();

const stdin = process.openStdin();
stdin.once('data', (value) => {
  console.log(`Você digitou ${value.toString().trim()}`)
});

// Só acontece a primeira vez, não roda infinitamente igual no index.js