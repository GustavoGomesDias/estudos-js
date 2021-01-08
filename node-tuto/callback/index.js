/* 
0 - Obter um usuário
1 - Obter o número de tel. de um usuário pelo seu ID
2 - Obter o endereço do usuário pelo ID
*/

function getUser(callback){
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: 'Aladin',
      dataNasc: new Date()
    })
  }, 1000);
}

function getPhone(id, callback){
  setTimeout(() => {
    return callback(null, {
      tel: '1199902',
      ddd: 11
    })
  }, 2000);
}

function getEnd(id, callback){
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      num: 0
    })
  });  
}

function resolverUser(erro, user){
  console.log("User", user);
}

getUser(function resolverUser(erro, user){
  if(erro){
    console.error("Error", erro);
    return;
  }
  getPhone(user.id, function resolverTel(erro1, tel){
    if(erro1){
      console.error("Error", erro1);
      return;
    }
    getEnd(user.id, function resolverEnd(erro2, end){
      if(erro2){
        console.error("Error", erro2);
        return;
      }

      console.log(`
        Nome: ${user.nome},
        End: ${end.rua}, ${end.num}
        Tel.: (${tel.ddd}) ${tel.tel}      
      `);

    })
  });

});


// const tel = getPhone(user.id)

// console.log("Tel", tel)

// User está retornando pelo problema de sincronia que gera ao usar setTimeout, que é assíncrona

// Por padrão, o último parâmetro é sempre o callback