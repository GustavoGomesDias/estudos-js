const event = require('events');

const meuEmissor = new event.EventEmitter();

const event_print = () => console.log("Vários fogo");

meuEmissor.on('fire', event_print);
meuEmissor.emit('fire');

meuEmissor.removeListener('fire', event_print); // Remove eventos

if(meuEmissor.emit('fire')){
  meuEmissor.emit('fire');
}else{
  console.log("Evento removido")
}