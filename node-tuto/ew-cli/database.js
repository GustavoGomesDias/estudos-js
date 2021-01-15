const {
  readFile,
  writeFile
} = require('fs');

const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

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

  async escreverArq(dados){
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));
    return true;
  }
  
  async cadastrar(heroi){
    const dados = await this.obterDadosArq();
    const id = heroi.id <= 2 ? heroi.id : Date.now();
    
    // Vai ter um objeto com nome e poder e outro só com id
    // Devemos juntar ambos

    const heroiComId = {
      id,
      ...heroi
    };

    const dadosFinal = [
      ...dados,
      heroiComId
    ]
    const resultado = await this.escreverArq(dadosFinal);
    return resultado;
  }

  async listar(id){
    const dados = await this.obterDadosArq();

    const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true)); // Se n houver id passado, trás a lista completa
    return dadosFiltrados;
  }

  async remover(id){
    if(!id){
      return await this.escreverArq([]);
    }
    
    const dados = await this.obterDadosArq();
    const indice = dados.findIndex(item => item.id === parseInt(id));

    if(indice === -1){
      throw Error("Herói inexistente.");
    }
    
    dados.splice(indice, 1);
    return await this.escreverArq(dados);
  }

  async atualizar(id, modifi){
    const dados = await this.obterDadosArq();
    const indice = dados.findIndex(item => item.id === parseInt(id));

    if(indice === -1){
      throw Error("Herói inexistente");
    }

    const atual = dados[indice];
    const objAtualizar = {
      ...atual,
      ...modifi
    }
    dados.splice(indice, 1);

    return await this.escreverArq([
      ...dados,
      objAtualizar
    ])
  }

}


module.exports = new Database();