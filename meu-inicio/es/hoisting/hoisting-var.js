// O exemplo:
function fn(){
    console.log(text); // Saída => undefined
    
    var text = "Exemplo";

    console.log(text); // Saída => Exemplo
}

fn();

// É a mesma coisa de:

/* function fn(){
    var text;
    console.log(text);
    
    text = "Exemplo";

    console.log(text);
}

fn(); */
