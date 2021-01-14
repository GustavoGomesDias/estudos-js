const {
  readFile
} = require('fs');

const { promisify } = require('util');

const readFileAsync = promisify(readFile);

// Outra forma de obter dados do json
// const dadosJson = require('./herois.json');

class Database {
  constructor(){
    this.NOME_ARQUIVO = 'herois.json';
  }

  async obterDadosArq(){
    const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8');

    return JSON.parse(arquivo.toString());
  }

  escreverArq(){
    
  }
  
  async listar(id){
    const dados = await this.obterDadosArq();

    const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true)); // Se n houver id passado, trás a lista completa
    console.log(dadosFiltrados)
    return dadosFiltrados;
  }
}


module.exports = new Database();