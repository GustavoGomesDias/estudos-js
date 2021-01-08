const fs = require('fs');

const file = 'C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/fs/teste.txt';

fs.chmod(file, 4, () => {
  try{
    console.log(fs.readFileSync(file, 'utf8'));
  }catch(err){
    console.error(err);
  }
});

/* 

Tem alguma coisa no win que não me deixa testar todas as opções, mas segue o link para referência:
https://nodejs.org/api/fs.html#fs_fs_chmod_path_mode_callback

*/