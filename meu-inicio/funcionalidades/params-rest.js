// Sem parâmetro REST
function soma(n1, n2){
    let res = n1 + n2;
    return res;
}

// console.log(soma (1, 2));

// Com parâmetro REST
/*
    Posso passar um num. ilimitado de parâmetros.
*/

// FOR OF com REST
function soma_rest(...n1){
    let res = 0;
    for(n of n1){
        res += n;
    }
    return res;
}

console.log(soma_rest(1, 2, 3));
console.log(soma_rest(1, 2, 3, 4));
console.log(soma_rest(1, 2, 3, 4, 5));

