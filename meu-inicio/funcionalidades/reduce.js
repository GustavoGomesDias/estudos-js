// Método da classe array que retorna uma array reduzido do array passado como valor.
// Rece 2 parâmetros e traballha os 2 primeiros elementos do array e apartir da segunda iteração
// ele trabalha o resultado da operação anterior com o próximo elemento.
// Retorna um array

let num = [0, 1, 2, 3, 4, 5];
let soma = num.reduce((p1, p2) => {
    return p1 + p2;
});

// console.log(soma);

let pessoas = [
    {nome: 'Bruno', idade: 40},
    {nome: 'Scarlindo', idade: 30},
    {nome: 'Fatsgirlda', idade: 25},
    {nome: 'Gustavo', idade: 20},
]

let nomes = pessoas.reduce((p1, p2) => {
    p1.push(p2.nome);
    return p1;
}, []);

let idades = pessoas.reduce((p1, p2) => {
    p1.push(p2.idade);
    return p1;
}, []);

console.log(nomes);
console.log(idades);