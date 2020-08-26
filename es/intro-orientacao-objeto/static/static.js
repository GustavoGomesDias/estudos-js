/* function Person() {
    Person.walk = function() {
        console.log('walking...');
    }
}

console.log(Person.walk()); */

// Ou

class Person{
    static walk(){
        console.log('walking...');
    }
}

console.log(Person.walk());

// Atribuição de propriedades, pois funções são objetos 
