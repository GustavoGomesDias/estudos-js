const service = require('./service');

async function main(){
  try{
    const result = await service.obterPessoas('a');
    const names = [];
    
    // for(let i in result.results){
    //   const pessoa = result.results[i];
    //   names.push(pessoa.name);
    // }

    // console.log('Names', names);
  
    for(pessoa of result.results){
      names.push(pessoa.name);
    }
    
    console.log('Names', names);

  }catch(err){
    console.error(err);
  }
}

main()