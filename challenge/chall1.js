class Carro {
    constructor(color){
        this.color = color;
    }
}

class Carro2 {
    constructor(color){
        this.color = color;
    }
}


function getColor(){
    return this.color;
}

Carro.prototype.getColor = getColor;

Carro2.prototype.getColor = getColor;

let c1 = new Carro("Vermelho");

let c2 = new Carro2("Azul");

console.log(c1.getColor());
console.log(c2.getColor());
