const path = require('path');

const notes = '/Users/Demir/Desktop/Gustavo/cmd/comandos-pws.txt';

console.log("Diretório:", path.dirname(notes));
console.log("Nome do arquivo:", path.basename(notes));
console.log("Extensão:", path.extname(notes));

const desktop = 'Desktop';
console.log("Juntando caminhos:", path.join('/', 'Users', 'Demir', desktop, 'Gustavo'));

console.log(path.resolve('joe.txt')); // Retorna o joe.txt como estando nesse dir
console.log(path.resolve('tmp', 'joe.txt')); // Retorna o /tmp/joe.txt como estando nesse dir
console.log(path.resolve('/tmp', 'joe.txt')); // Retorna /tmp/joe.txt, pois tmp é visto como dir absoluto

console.log(path.normalize('/users/demir/../index.js')); // Retorna uma tentaitva de calculo retirando ., .., // e etc