const fs = require('fs');

try{
  fs.renameSync('C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/callbacks', 'C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/callback');
}catch(err){
  console.error(err);
}