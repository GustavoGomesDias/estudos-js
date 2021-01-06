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

console.log("Valor máx. antes do setMaxListeners -", meuEmissor.getMaxListeners()); // Retorna o valor máximo de eventos que o objeto EventEmitter pode ter.

meuEmissor.setMaxListeners(17) // Seta o valor máximo de eventos que o objeto EventEmitter pode ter.

console.log("Valor máx. depois do setMaxListeners -", meuEmissor.getMaxListeners());