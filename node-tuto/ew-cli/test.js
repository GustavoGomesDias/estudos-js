const {
  deepStrictEqual,
  ok
} = require('assert');

const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  poder: 'Speed',
  id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
  nome: "Lanterna Verde",
  poder: "Energia do Anel",
  id: 2
}

// descrine => inicializa um suite de testes
describe('Suite de manipulação de heróis', function(){
  // Cadastrar os defaults itens
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
  })

  it('Deve pesquisar um herói usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);

    deepStrictEqual(resultado, expected);
  });
  
  
  
  it('Deve cadastrar um heróis usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;

    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);

    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

    deepStrictEqual(actual, expected);
  })

  it('Deve remover o heróis por id', async () => {
    const expected = true;
    
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);
    
    deepStrictEqual(resultado, expected);
  })

  it('Deve atualizar o herói pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Dinheiro'
    }

    const novoDado = {
      nome: 'Batman',
      poder: 'Dinheiro'
    }

    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);

    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);

    deepStrictEqual(resultado, expected);

  })

  // Remove os itens cadastrados no before
  after(async () => {
    await database.remover(DEFAULT_ITEM_CADASTRAR.id);
    await database.remover(DEFAULT_ITEM_ATUALIZAR.id);
  })
})