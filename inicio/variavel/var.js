var test = 'exemple';

(() => {
    console.log(`Valor dentro da função "${test}"`); // test  = undefined

    if(true){
        var test = 'exemple';
        console.log(`Valor dentro do if "${test}"`); // rxemple
    }

    console.log(`Valor após o if "${test}"`); // exemple
})();

// mesma coisa que:
/* 
var test = 'exemple';

(() => {
    var test;
    console.log(`Valor dentro da função "${test}"`); // test  = undefined

    if(true){
        test = 'exemple';
        console.log(`Valor dentro do if "${test}"`); // rxemple
    }

    console.log(`Valor após o if "${test}"`); // exemple
})();

*/

// var não respeita escopo de bloco