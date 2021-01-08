// Lista com a ordem certa
let order = [];

// Lista da ordem em que o user clica
let clickedOrder = [];

// Pontuação do user
let score = 0;

/* 
0 = Red
1 = Green
2 = Yellow
3 = Blue
 */

// querySelector retorna o primeiro elemento com o parâmetro passado
// querySelectorAll retorna todos elementos com o parâmetro passado
// # => id, . => class

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

// Cria uma ordem aleatória de cores
let shuffleOrder = () => {
  // Math.floor retorna o menor número inteiro
  // Math.random gera um número random entre 0 e 1 (1 n incluso)
  // Ou seja, estamos gerando um número q vai de 0 a 3

  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];
  
  for(let i in order){
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

// Pisca a primeira cor
let lightColor = (element, number) => {
  number *= 500;
  setTimeout(() => {
    // classList => alternativa conveniente para acessar a lista de classes de um elemento
    // classList.add => adiciona uma nova classe
    element.classList.add('selected');
    setTimeout(() => {
      element.classList.remove('selected');
    }, 300);
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  });
}

// Checa se os botões clicados são so mesmos gerados
let checkOrder = () => {
  for(let i in clickedOrder){
    if(clickedOrder[i] != order[i]){
      gamerOver();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`);
    nextLevel();
  }
};

// Clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;

  // Quando se clica na cor, ela ganha a class selected
  createColorElement(color).classList.add('selected');

  // Desliga a cor (pisca) do selecionado
  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
};

// Retorna a cor
let createColorElement = (color) => {
  if(color == 0){
    return red;
  }else if(color == 1){
    return green;
  }else if(color == 2){
    return yellow;
  }else if(color == 3){
    return blue;
  }else{
    return alert("Opa! Cor inválida.");
  }
};

// Próximo nível
let nextLevel = () => {
  score++;
  shuffleOrder();
};

// Perdeu
let gamerOver = () => {
  alert(`Pontuação: ${score}\nFoi quase hehehe`);
  order = [];
  clickedOrder = [];

  playGame();
}

// Iniciar o jogo
let playGame = () => {
  alert(`Bem vindo ao Genesis!\nIniciando um novo jogo.`);
  score = 0;

  nextLevel();
};

// Clique para as cores
red.onclick = () => click(0);
green.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
playGame();