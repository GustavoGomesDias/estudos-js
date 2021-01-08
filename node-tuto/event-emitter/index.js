const EventEmitter = require('events');
class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor();

const nomeEvento = 'user:click';
meuEmissor.on(nomeEvento, (click) => {
  console.log('Um user clicou', click);
});

// meuEmissor.emit(nomeEvento, " na barra de rolagem");
// meuEmissor.emit(nomeEvento, " no ok");


const stdin = process.openStdin();
stdin.addListener('data', (value) => {
  console.log(`Você digitou ${value.toString().trim()}`)
});



// on = addListener => perimite que uma ou mais funções sejam anexadas a eventos nomeados e que são emitidos pelo objeto/usado para vincular uma função ao evento

// emit => aciona eventos nomeados/é usado para disparar um evento