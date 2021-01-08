const event = require('events');

const meuEmissor = new event.EventEmitter();

const nomeEvento1 = 'user:click - 1';

meuEmissor.on(nomeEvento1, (click) => {
  console.log('Um user clicou 1', click);
});

meuEmissor.on(nomeEvento1, (click) => {
  console.log('Um user clicou 2', click);
});

meuEmissor.prependListener(nomeEvento1, (click) => {
  console.log('Um user clicou 3', click);
}); // É chamado primeiro que os outros dois.

// meuEmissor.prependOnceListener(nomeEvento1, (click) => {
//   console.log('Um user clicou 3', click);
// }); // É chamado uma única vez primeiro que os outros

meuEmissor.emit(nomeEvento1, `${nomeEvento1}`);