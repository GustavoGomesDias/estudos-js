const service = require('./service');

Array.prototype.meuMap = function(callback){
  const novoArrayMapeado = [];
  for(let i = 0; i <= this.length - 1; i++){
    const result = callback(this[i], i);
    novoArrayMapeado.push(result);
  }

  return novoArrayMapeado;

  // arrow function não tem 'this'
};

async function main(){
  try {

    const result = await service.obterPessoas('a');
    
    // result.results.forEach((item) => {
    //   names.push(item.name);
    // });

    // const names= result.results.map((pessoa) => {
    //   return pessoa.name;
    // });

    // const names= result.results.map(pessoa => pessoa.name);

    const names = result.results.meuMap((pessoa , indice) => {
      return `[${indice}]${pessoa.name}`;
    });

    console.log(names);

  }catch(err){
    console.error(err);
  }
}

main();