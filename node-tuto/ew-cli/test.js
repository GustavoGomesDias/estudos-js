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

// descrine => inicializa um suite de testes
describe('Suite de manipulação de heróis', function(){
  it('Deve pesquisar um herói usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);
    
    console.log('resultado', resultado);
    console.log(expected);

    deepStrictEqual(resultado, expected);
  });
  
  
  
  // it('Deve cadastrar um heróis usando arquivos', async () => {
  //   const expected = DEFAULT_ITEM_CADASTRAR;

  //   ok(null, expected);
  // })
})