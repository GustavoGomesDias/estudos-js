const event = require('events');

const meuEmissor = new event.EventEmitter();

const nomeEvento1 = 'user:click - 1';
const nomeEvento2 = 'user:click - 2';
const nomeEvento3 = 'user:click - 3';

meuEmissor.on(nomeEvento1, (click) => {
  console.log('Um user clicou', click);
});

meuEmissor.on(nomeEvento2, (click) => {
  console.log('Um user clicou', click);
});

meuEmissor.on(nomeEvento3, (click) => {
  console.log('Um user clicou', click);
});

console.log(meuEmissor.eventNames()); // [user:click - 1, user:click - 2, user:click - 3]

// .eventNames() => gera um array contendo os nomes dos eventos relacionados a um object
