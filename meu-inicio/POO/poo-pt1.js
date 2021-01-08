// class => esqueleto/projeto

class Carro{
    //constructor executa assim que houver instânciação
    constructor(cor){
        // Preciso ao declarar dentro do constructor
        this.cor = cor;
        console.log(this.cor);
    }
}

let c1 = new Carro("Vermelho");
let c2 = new Carro("Verde");o