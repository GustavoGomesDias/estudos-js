class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.km = 0;
        this.comb = 10;
    }
    info(){
        console.log(this.marca);
        console.log(this.modelo);
        console.log(this.cor);
        console.log(this.ligado? 
            "Sim":"Não"
        );
        console.log(this.km);
        console.log(this.comb);
    }
    set setComb(v){
        this.comb = v;
    }
    get getComb(){
        return this.comb;
    }
}
let c1 = new Carro("Honda", "HRV", "Cinza");

// com get e set na frente, pode-se chamar os métodos como se fosse propriedade

c1.setComb = 100; 
c1.info()
