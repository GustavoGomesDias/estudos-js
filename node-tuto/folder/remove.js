const fs = require('fs-extra');
const fs1 = require('fs');



async function removeFolder(folder){
  try{
    await fs.remove(folder);
    console.log('Removido!');
  }catch(err){
    console.error(err);
  }
}

const folder = 'C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/teste';

try{
  if(!fs.existsSync(folder)){
    fs.mkdirSync(folder);
  }
}catch(err){
  console.error(err);
}
// removeFolder(folder);


// Com promessas
fs.remove(folder)
  .then(console.log("Removido!"))
  .catch(err => console.error(err));