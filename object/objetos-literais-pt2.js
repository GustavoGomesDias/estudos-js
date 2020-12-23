const Veiculo = {
    marca: "VW",
    modelo: "Golf",
    info: function(){
        console.log(this.marca);
        console.log(this.modelo);
    }
}

const Caracteristica = {
    cor: "Cinza",
    cambio: "Automático"
}

// Mescla Veiculo e Caracteristica
const Carro = Object.assign(Veiculo, Caracteristica);

// Carro.info();

// console.log(Carro);

// Desestruturação
let {marca, modelo} = Carro;
console.log(marca, modelo);

// Delete
delete Carro.cor;
console.log(Carro);
