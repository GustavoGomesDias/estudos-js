const fs = require('fs');

fs.stat('/Users/Demir/Desktop/Gustavo/cmd/comandos-pws.txt', (err, stats) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(`Sem bloqueio de encadeamento =>`, stats); // Mostra todos os stats
  console.log(`Sem bloqueio de encadeamento =>`, stats.size); // Mostra o tamanho
});

// Blouqeio de encademato

try{
  const stats = fs.statSync('/Users/Demir/Desktop/Gustavo/cmd/comandos-pws.txt');
  console.log(`Com bloqueio de encadeamento =>`, stats);
}catch(err){
  console.log(err)
}

// A com bloqueio bloqueia todas as outeas funções até que ela esetja pronta, por isso é primtada primeiro.
// Encadeamento é quando temos funções precisando de outras funções e sendo executadas sequencialmente.