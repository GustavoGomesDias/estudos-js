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
    ligaDesliga(t){
        this.ligado = t;
    }
}

let c1 = new Carro("Honda", "HRV", "Cinza");
c1.info();
c1.ligaDesliga(true);
c1.info();