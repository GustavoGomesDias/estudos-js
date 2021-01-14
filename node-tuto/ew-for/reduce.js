const { obterPessoas } = require('./service');

Array.prototype.meuReduce = function(callback, valorInicial){
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for(let index = 0; index <= this.length - 1; index++){
    valorFinal = callback(valorFinal, this[index], this);
  }
  return valorFinal;
}


async function main(){
  try{
    const { results } = await obterPessoas('a');

    const pesos = results.map(item => parseInt(item.height));

    console.log(pesos);

    // const total  = pesos.reduce((ant, prox) => {
    //   return ant += prox;
    // }, 0);

    const minhaLista = [
      ['Erick', 'Wendel'],
      ['NodeBT', 'Nerdzão']
    ]

    const total = minhaLista.meuReduce((ant, prox) => {
      return ant.concat(prox);
    }, []).join(', ')
    console.log("Total =", total);

  }catch(err){
    console.error(err);
  }
}

main();