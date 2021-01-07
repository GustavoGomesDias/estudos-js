const fs = require('fs');

fs.readFile('C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/file/edit-file/teste.txt', 'utf8', (erro, data) => {
  if(erro){
    console.error(erro);
    return;
  }

  console.log(data);

})