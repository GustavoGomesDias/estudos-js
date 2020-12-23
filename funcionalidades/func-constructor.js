// constructor function + operador new

let soma = new Function("n1, n2", "return n1 + n2");

console.log(soma(1, 2));

//new Function("params", "o que a func deve fazer");