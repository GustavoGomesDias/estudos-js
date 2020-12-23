// Sintaxe = function* nome(){}
function* cores(){
    yield 'Vermelho',
    yield 'Azul',
    yield 'Verde'
}

for(let c of cores()){
    console.log(c);
    // Imprime cada cor
}

const c = cores();

// Não retorna nada, já que com func geradora só é possívrl iniciar  a variavel com next
// console.log(c);

// Retorna um objeto
// console.log(c.next())

function* cont(n){
    let c = 0;
    while(c < n){
        yield console.log(c);
        c++;
    }
}

const ct = cont(10);

// Só aqui que executa
console.log(ct.next()); // 0
console.log(ct.next()); // 1