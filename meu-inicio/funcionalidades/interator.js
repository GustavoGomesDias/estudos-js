let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let it = num[Symbol.iterator]();

// Retorna um Object do índice 0
// console.log(it.next());

// Retorna o valor do índice 1
// console.log(it.next().value);

let len = num.length;

for(let i = 0; i < len; i++){
    let v = it.next().value;
    v % 2 > 0 ?
        console.log("Ímpar")
    :
        console.log("Par")
}
