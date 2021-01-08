// JS é síncrono
function contar(n){
    let cont = 0;
    for(let i = 0; i < n; i++){
        cont++;
    }
    return cont;
}

function contarT(n){
    let cont = 0;
    let t = setTimeout(() => {
        for(let i = 0; i < n; i++){
            cont++;
        }   
    }, 2000);
    return cont;
}

function contarP(n){
    let cont = 0;
    let p = new Promise((resolve, rejected) => {
        for(let i = 0; i < n; i++){
            cont++;
        }
        if(cont == n){
            resolve(cont);
        }else{
            rejected("Erro");
        }
    });
    return p;
}

// Agora em função assíncrona
function contarPT(n){
    let cont = 0;
    let p = new Promise((resolve, rejected) => {
        let t = setTimeout(() =>{
            for(let i = 0; i < n; i++){
                cont++;
            }
            if(cont == n){
                resolve(cont);
            }else{
                rejected("Erro");
            }
        }, 2000);
    });
    return p;
}

console.log(contar(1000)); // Executa primeiro, apesar de demandar mais processamento
// console.log(contar(10)); // Só executa depois que termina a anterior
// console.log(contarT(10)); // Nem executa, pois setTimeout é assíncrono
// console.log(contarP(10)); // Estado e resultado
contarP(10)
    .then(sucesso => console.log(`Sucesso: ${sucesso}`))
    .catch(erro => console.log(erro));

contarPT(10)
    .then(sucesso => console.log(`Sucesso: ${sucesso}`))
    .catch(erro => console.log(erro));