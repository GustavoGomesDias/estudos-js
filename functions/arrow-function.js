// (params) => {}; ou () => {};
const soma = (p1, p2) => {
    return p1 + p2;
}

console.log(soma(1, 2));

const soma_rest = (...num) => {
    let r = 0;
    for(n of num){
        r += n;
    }
    return r;
}

console.log(soma_rest(1, 2, 3, 5));

// 1 params pode ser sem ()
const par = num => {
    num % 2 == 0 ?
        console.log("Par")
    :
        console.log("Ímpar")
}

par(3);