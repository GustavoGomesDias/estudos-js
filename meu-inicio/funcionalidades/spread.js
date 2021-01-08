// O spread é os 3 pontos (...) antes da variável

const notas = [100, 60, 45, 78, 80, 32, 86];

// Imprime o array de notas
// console.log(notas)

// Imprime APENAS as notas
// console.log(...notas);

let notas2 = [100, 200, 300];

function soma(n1, n2, n3){
  return n1 + n2 + n3;
}

// Essa linha
// console.log(soma (notas2[0], notas2[1], notas2[2]));

// É a mesma coisa que
// console.log(soma(...notas2));

// Outra situação
const jogador = [
  nome = "Bruno",
  pontos = 1000,
  vidas = 7
];

// Imprime o array
console.log(jogador);

// Imorime em valores separados
console.log(...jogador);