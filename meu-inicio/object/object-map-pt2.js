let produtos = new Map([
    ["01", "Mouse"],
    ["02", "Teclado"],
    ["03", "Monitor"],
    ["04", "Gabinete"]
]);

produtos.set("05", "Memória")
    .set("06", "GPU");

// Método clear apaga todo o Objeto Map
// produtos.clear();

// Delete apaga um elemento selecionado passando a chave
// produtos.delete("03");

// 

/* for(p of produtos){
    console.log(p); // Object
} */

//forEach
// produtos.forEach((value, key) => {
//     console.log(`Key: ${key}`);
//     console.log(`Value: ${value}`);
// });

// Método key
let itk = produtos.keys();
console.log(itk.next());
console.log(itk.next().value);

// Método values
let itv = produtos.values();
console.log(itv.next());
console.log(itv.next().value);

// Método has verifica se o elemento tá presente, retornando true ou false
// console.log(produtos.has("02"));


let produtos2 = new Map([
    ["01", ["Mouse", "R$ 10,75"]],
    ["02", ["Teclado", "R$ 35,90"]],
    ["03", ["Monitor", "R$ 420,50"]],
    ["04", ["Gabinete", "R$ 150,00"]]
]);

// Pegando o valor
// for(p of produtos2){
//     console.log(p[1][1]); // Object
// }

// Funciona como uma matriz p[1][0] pega o produto