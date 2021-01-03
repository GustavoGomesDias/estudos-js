// [[Prototype]] animal, que contém os métodos
// "this" só vale para o objeto que está usando a função, ou seja, animal não será modificado se chamarmos sleep para rabbit


let animal = {
    walk(){
        console.log("I walk");
    },
    sleep(){
        this.isSleeping = true;
    }
}

let rabbit = {
    name: "White Rabbit",
    
    // Declara que animal é prototype de rabbit
    __proto__: animal 
}

// modifica rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined, pois como o sleep só modifica para rabbit e não para animal, isSleeping não existe em anial