let num = [1, 4, 9, 16, 25];

// Transforma raiz em um array com as raizes dos elem de num
// No map, passa-se a forma que se irá operar a variável
let raiz = num.map(Math.sqrt);

for(r of raiz){
    console.log(r);
}

let dobro = num.map((n) => {
    return n * 2;
});

for(d of dobro){
    console.log(d);
}