const fs = require('fs');
const path = require('path');

const folder = 'C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/file';
const folder1 = 'C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/file/edit-file';

console.log(fs.readdirSync(folder)); // Retorna um array com o conteúdo do diretório

// Obter o caminho completo

console.log("\n")

fs.readdirSync(folder).map(file => 
  console.log("Path do caminho completo dos arquivos: ", path.join(folder, file))
);


// Filtrar por arquivos
console.log("\n")

const file = file => {
  if(file){
    return fs.lstatSync(file).isFile();
  }
}

fs.readdirSync(folder1).map(file => 
  console.log("Filtra pra retornar apenas os arquivos: ", path.join(folder, file))
).filter(file);