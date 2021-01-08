function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Gustavo'});
const p2 = Pessoa.call({name: 'Guilherme'});

console.log(p);
// { name: 'Gustavo' }
console.log(p2);
// { name: 'Gustavo' }
// Não deixa mudar pessoa