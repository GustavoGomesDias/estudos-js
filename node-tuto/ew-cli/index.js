const Commander = require('commander');
const Database = require('./database');
const Heroi = require('./heroi');

async function main(){
  Commander
    .version('v1')
    .option('-n, --nome [value]', "Nome do herói")
    .option('-p, --poder [value]', "Poder do herói")
    .option('-i, --id [value]', "Id do herói")

    .option('-c, --cadastrar', "Cadastrar herói")
    .option('-l, --listar', "Lisar heróis")
    .option('-r, --remover', "Remove um heróis pelo id")
    .option('-a, --atualizar [value]', "Atualiza um heróis pelo id")
    .parse(process.argv)

  const heroi = new Heroi(Commander);
  
  try{
    if(Commander.cadastrar){
      delete heroi.id; // delete => deleta uma chave
      const resultado = await Database.cadastrar(heroi);
      
      if(!resultado){
        console.error('Herói não codastrado!')
        return;
      }
      console.log("Herói cadastrado com sucesso!");
    }

    if(Commander.listar){
      const resultado = await Database.listar();
      console.log(resultado);
      return;
    }

    if(Commander.remover){
      const resultado = await Database.remover(heroi.id);
      if(!resultado){
        console.error("Não foi possível remover o herói!");
        return;
      }
      console.log("Herói removido com sucesso!")
    }

    if(Commander.atualizar){
      const idParaAtt = parseInt(Commander.atualizar);
      
      // Remover chaves undefined | null
      const dado = JSON.stringify(heroi);

      const heroiAtt = JSON.parse(dado);
      const resultado = await Database.atualizar(idParaAtt, heroiAtt);

      if(!resultado){
        console.error("Não foi possível atualizar o herói.");
        return;
      }

      console.log("Herói atualizado com sucesso!");
    }

  }catch(err){
    console.error('Error', err)
  }


}

main()