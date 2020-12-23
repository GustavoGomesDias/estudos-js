/*
static tem a mesma referência de memória para todas instâncias, por isso se mudar em uma instância, muda para todas.
*/
class Carro{
    static alerta = true;
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
        // posso usar o nome da class pra chamar statics
        console.log(Carro.alerta? 
            "ALERTA!!":"Tudo safe :V"
        );
        console.log("-----------------------")
    }
    set setComb(v){
        this.comb = v;
    }
    get getComb(){
        return this.comb;
    }
    set setAlerta(t){
        Carro.alerta = t;
    }
    get getAlerta(){
        return Carro.alerta;
    }
}

let c1 = new Carro("Honda", "HRV", "Cinza");
c1.setAlerta = false;
c1.info();
let c2 =new Carro("GM", "Camaro", "Laranja");
c2.info();

// Apesar de eu  ter setado a iniciação de alerta como false, ao instânciar c2, vemos que alerta está true, pois foi mudadi na linha 44.