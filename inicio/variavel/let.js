(() => {
    let test = 'função';
    console.log(`Valor dentro da função "${test}`); // função
    
    if(true){
        let test = 'if';
        console.log(`Valor dentro do if "${test}"`); // if
    }
    
    console.log(`Valor dentro da função "${test}`); // função

});

// let e const respeitam o escopo de bloco, logo quando chamamos ele dentro do if, ele esse let só existe lá.

// o let test na função é diferente do let test no if