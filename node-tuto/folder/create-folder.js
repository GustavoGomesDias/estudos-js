const fs = require('fs');

const folder = 'C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/test';

try{
  if(!fs.existsSync(folder)){
    fs.mkdirSync(folder);
  }
}catch(err){
  console.error(err);
}