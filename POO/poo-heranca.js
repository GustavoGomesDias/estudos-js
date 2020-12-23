// 1 - Gasolina 2 - Diesel 3 - Álcool
// 1 Passeio 2 - Transporte 3 - Combate

class Carro{
    constructor(tpComb, tpTipo){
        this.tpTipo = tpTipo;
        this.qtdComb = 100;
        this.ligado = false;
        this.tipoComb = tpComb
    }
    info(){
        console.log(this.tpTipo);
        console.log(this.qtdComb);
        console.log(this.tpComb);
        console.log(this.ligado? 
            "Sim":"Não"
        );
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