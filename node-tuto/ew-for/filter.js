const { obterPessoas } = require('./service');

Array.prototype.meuFilter = function (callback) {
  const list = [];
  for(index in this){
    const item = this[index];
    
    const result = callback(item, index, this);

    if(!result) continue;

    list.push(item);
  }
  return list;
}


async function main(){
  try{
    const { results } = await obterPessoas('a');

    // const familiaLars = results.filter(function (item){
    //   // Retorna booleano
    //   // true => mantém na lista
    //   // false => remove da lista

    //   const result = item.name.toLowerCase().indexOf('lars') !== -1; // true or false
    //   // encontrou == posição no array
    //   // não encontrou == -1
    //   return result;


    // });

    const familiaLars = results.meuFilter((item, index, lista) => {
      return item.name.toLowerCase().indexOf('lars') !== -1;
      
    })

    const names = familiaLars.map(pessoa => pessoa.name);
    console.log(names);

  }catch(err){
    console.error(err);
  }
}



main()




/* 

const item = {
  nome: 'Gustavo',
  idade: 21
}

const { nome } = item; => Pega só o nome de item

const { nome, idade } = item ; => Pega o nome e a idade, separando eles em ambas as props.

*/