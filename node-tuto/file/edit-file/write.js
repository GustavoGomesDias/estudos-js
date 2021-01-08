const fs = require('fs');

const rex = '🦖';
const heart = '❤️';

fs.writeFile('C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/file/edit-file/teste.txt', rex, {flag: 'a+'}, err => {
  if(err){
    console.error(err);
  }
});

// Ou

fs.appendFile('C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/file/edit-file/teste.txt', heart, err => {
  if(err){
    console.error(err);
  }
});