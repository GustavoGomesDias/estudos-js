let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
}

// Object.keys retorna as chaves do objeto
console.log(Object.keys(rabbit)); // apenas jumps

for(let prop in rabbit) console.log(prop); // jumps, depois eats

for(let prop in rabbit){
    // hasOwnProperty(prop) retorna true se a prop n for herdada
    let isOWn = rabbit.hasOwnProperty(prop);
    if(isOWn){
        console.log(`De rabbit: ${prop}`);
    }else{
        console.log(`Herança de animal: ${prop}`);
    }
}