const EventEmitter = require('events');
class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor();

const nomeEvento = 'user:click';

meuEmissor.on(nomeEvento, (click) => {
  console.log('Um user clicou', click);
})

// meuEmissor.emit(nomeEvento, " na barra de rolagem");
// meuEmissor.emit(nomeEvento, " no ok");

// on => perimite que uma ou mais funções sejam anexadas a eventos nomeados e que são emitidos pelo objeto

// emit => aciona eventos nomeados.

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
  console.log(`Você digitou ${value.toString().trim()}`)
});
