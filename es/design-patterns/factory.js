function Pessoa(name){
    return {
        name: name,
        lastName: 'Dias'
    }
}

const p = Pessoa('Gustavo');
console.log(p);

// ou até

function Pessoa1(customProperties){
    return {
        name: 'Gustavo',
        lastName: 'Dias',
        ...customProperties
    }
}

const p1 = Pessoa1({age: 20});
console.log(p1);