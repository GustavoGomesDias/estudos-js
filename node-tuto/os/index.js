const os = require('os');

console.log("Arquitetura:", os.arch(), '\n'); // Retorna a arquitetura do computador.
console.log('Cpus:', os.cpus(), '\n'); // Retorna infos. sobre as CPUs do computador.
console.log('Memória livre no sistema (bytes):', os.freemem(), '\n'); 
console.log('Caminho para o dir inicial:', os.homedir(), '\n'); 
console.log('Host:', os.homedir(), '\n'); 
console.log('Newtwork Interface:', os.networkInterfaces(), '\n'); 
console.log('Plataforma (win32, linux, etc):', os.platform(), '\n'); 
console.log('Total de memória livre no sistema (bytes):', os.totalmem(), '\n'); 
console.log('Tipo do OS:', os.type(), '\n'); 
console.log('Versão do OS:', os.release(), '\n'); 
console.log('Número de segundos que o PC tá ligado:', os.uptime(), '\n'); 
console.log('Informações do user:', os.userInfo(), '\n'); 

