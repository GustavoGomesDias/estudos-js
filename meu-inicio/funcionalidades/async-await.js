// async => declara que a função vai esperar o retorno de uma promise
// await => garante que terá o retorno de uma promise
// O uso delas elimina a nessecidade de um then e catch

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

async function contarPA(n){
    const r = await contarP(n);
    console.log(r);
}

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

async function contarPTA(n){
    const r = await contarPT(n);
    console.log(r);
}

contarPA(10);
contarPTA(10);
