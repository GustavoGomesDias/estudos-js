const fs = require('fs');


const file = '/Users/Demir/Desktop/Gustavo/cmd/comandos-pws.txt';
const dir  = '/Users/Demir/Desktop/Gustavo/cmd';

const file_or_dir = (elem) => fs.stat(elem, (err, stats) => {
  if(err){
    console.error(err);
    return;
  }
  console.log(stats.isFile()); // Testa pra ver se é um arquivo
  console.log(stats.isDirectory()); // Testa pra ver se é um diretório
  console.log('\n');

});

file_or_dir(file);
file_or_dir(dir);