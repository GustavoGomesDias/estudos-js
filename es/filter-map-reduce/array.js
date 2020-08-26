const users = ['Gustavo', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        nome: 'Gustavo',
        age: 20,
        gender: gender.MAN
    },
    {
        nome: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        nome: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
]

//forEach altera o objeto

// Filtrar array => retorna um novo array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log("Nova lista apenas com homens:", mens);

// Retornar um novo array
const personWithCourse = persons.map(person => {
    person.course = 'Intro. a JS';
    return person;
});

console.log('\nPessoas com a adiçãop do course', personWithCourse);

// Transformar um array em outro tipo
// Ex.: Somar as idades
const totalAge = persons.reduce((age, person) => {
   age += person.age;
   return age; 
}, 0); // O 0 aqui é o valor inicial de age

console.log('\nSoma de idade das pessoas:', totalAge);

// Somar a idade de todas as pessoas com idade par
const totalEvenAges = persons
    .filter(person => person.age % 2 == 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    }, 0);

console.log('\nSoma de idade das pessoas com idade par:', totalEvenAges);