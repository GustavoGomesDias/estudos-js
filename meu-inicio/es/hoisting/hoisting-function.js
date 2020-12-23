// O exemplo:
function fn(){
    log('Exemplo');
    function log(value){
        console.log(value);
    }
}

// É a mesma coisa de:

/* 
function fn() {
    function log(value){
        console.log(value);
    }

    log('Exemplo');
}

*/