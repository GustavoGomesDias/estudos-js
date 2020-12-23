/* // Exemplo

// Função para atribuir elementos ao objeto cachorro.

// this é referente ao objeto passadp
function Animal(qtdPatas){
    this.qtdPatas = qtdPatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);
    this.morde = morde;
}

// new Faz com que pug herde o objeto que contém qtdPatas e morde (que aqui está como false).
const pug = new Cachorro(false);
console.log(pug);
// Cachorro {qtdPatas: 4, morde: flase}

*/
// Agoto, com class fica assim:

class Animal{
    constructor(qtdPatas){
        this.qtdPatas = 4;
    }
}

class Cachorro extends Animal{
    constructor(morde){
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(false);
console.log(pug);
// Cachorro {qtdPatas: 4, morde: 4}

// Em ambos os casos Cachorro herda Animal