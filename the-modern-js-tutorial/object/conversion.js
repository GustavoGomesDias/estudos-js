// Conversão de objetos em tipos primitivos

// Symbol.toPrimitive
let user = {
    name: "Jhon",
    money: 1000,
    [Symbol.toPrimitive](hint){
        alert(`hint: ${hint}`);
        return hint == "string"? `{name: "${this.name}"}`: this.money;
    }
}

alert(user); // string -> {name: Jhon}
alert(+user); // number > 1000
alert(user + 500); // default -> 1500