let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read(){
        this.a = +prompt("A:", 0);
        this.b = +prompt("B:", 0);
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());