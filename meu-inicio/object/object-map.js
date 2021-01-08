//pode-se iniciar com let produtos = new Map():
let produtos = new Map([
    ["01", "Mouse"],
    ["02", "Teclado"],
    ["03", "Monitor"],
    ["04", "Gabinete"]
]);

//get/set como eu conheço de C

//          key------value
produtos.set("05", "Memória")
    .set("06", "GPU");

// size => tamanho
console.log(produtos.size); // 6
console.log(produtos.get("01")); // Mouse

for(p of produtos){
    console.log(p); // Object
}

// p[0] => retorna as keys
//p[1] => retorna os values


