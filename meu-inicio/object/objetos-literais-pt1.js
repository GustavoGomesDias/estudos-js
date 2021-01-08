const Carro = {
    marca: "VW",
    modelo: "Golf",
    info: function(){
        console.log(this.marca);
        console.log(this.modelo);
    }
}
Carro.info()

// Redefinindo
Carro.marca = "Honda";
Carro.modelo = "HRV";
Carro.info();

// Usando array/vetor
Carro["marca"] = "GM";
Carro["modelo"] = "Camaro";
Carro.info();

// Nova instância
let c2 = Object.create(Carro);
c2.info();

c2.marca = "Honda";
c2.modelo = "HRV";

console.log("c2: " + c2.info());

console.log("Carro");
Carro.info();