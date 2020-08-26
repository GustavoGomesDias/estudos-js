/* function Person(initialName){
    var name = initialName;
    Object.defineProperties(this, 'name', {
        // this => contexto de criação da objetos derivados de pessoa
        get: function(){
            return name;
        },
        set: function(value){
            name = value
        }
    });
} */


// No ES6
class Person {
    #name = '';
    constructor(name){
        this.#name = name;
    }
    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

// Esconder infos do programa, o '#' é a guarda de inclusão