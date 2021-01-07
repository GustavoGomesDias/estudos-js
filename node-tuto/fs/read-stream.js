const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  const file = 'C:/Users/Demir/Desktop/Gustavo/dev/estudos-js/node-tuto/fs/teste.txt' +req.url;

  const readstream = fs.createReadStream(file);

  // Isso apenas canaliza o fluxo de leitura para o objeto de resposta (que vai para o cliente)
  readstream.on('open', () => readstream.pipe(res));

  readstream.on('error', (err) => res.end(err))
}).listen(3000);