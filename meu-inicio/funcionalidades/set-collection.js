let meuSet = new Set([1, 2, 3]);

for(n of meuSet){
    console.log(n);
}

// Para adicionar
meuSet.add(4);
meuSet.add(5);
meuSet.add(6);

console.log(meuSet.size); // 6 elem, logo, tamanho = 6.
