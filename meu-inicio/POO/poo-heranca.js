// 1 - Gasolina | 2 - Diesel | 3 - Álcool
// 1 - Passeio | 2 - Transporte | 3 - Combate

class Carro{
    constructor(tpComb, tpTipo){
        this.tpTipo = tpTipo;
        this.qtdComb = 100;
        this.ligado = false;
        this.tipoComb = tpComb
    }
    info(){
        console.log(this.qtdComb);
        console.log(this.tipoComb);
        console.log(this.ligado? 
            "Sim":"Não"
        );
        if(this.tpTipo == 1){
            console.log("Passeio");
        }else if(this.tpTipo == 2){
            console.log("Transporte")
        }else{
            console.log("Combate");
        }
    }
    set setLigado(t){
        this.ligado = t;
    }
    get getLigado(){
        return this.ligado;
    }
    set setComb(v){
        this.comb = v;
    }
    get getComb(){
        return this.comb;
    }
}

class CarroCombate extends Carro{
    constructor(potTiros){
        // Passa as propriedades de Carro para CarroCombate
        super(3, 2);

        this.tiros = 1000;
        this.potTiros = potTiros;
        this.blindagem = 100;
    }
    info(){
        // Pega o método info() de Carro e permite extende-lo para novas funcionalidades
        super.info();

        console.log(this.tiros)
        console.log(this.potTiros)
        console.log(this.blindagem)
    }
}

let c1 = new CarroCombate(100);
c1.info();