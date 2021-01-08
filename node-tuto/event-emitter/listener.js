const event = require('events');

const meuEmissor = new event.EventEmitter();

const nomeEvento1 = 'user:click - 1';
const nomeEvento2 = 'user:click - 2';
const nomeEvento3 = 'user:click - 3';

meuEmissor.on(nomeEvento1, (click) => {
  console.log('Um user clicou', click);
});

meuEmissor.on(nomeEvento1, (click) => {
  console.log('Um user clicou', click);
});

meuEmissor.on(nomeEvento1, (click) => {
  console.log('Um user clicou', click);
});

meuEmissor.on(nomeEvento2, (click) => {
  console.log('Um user clicou', click);
});

meuEmissor.on(nomeEvento3, (click) => {
  console.log('Um user clicou', click);
});

console.log(meuEmissor.listenerCount('user:click - 1')); // Retorna a contagem de ouvintes do evento passado como parâmetro



console.log(meuEmissor.listeners('user:click - 1'));
/*
Retorna uma lista com os nomes dos ouvintes, que no nosso caso são funções anônimas por estarmos usando () => {}
[
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
] 
*/
