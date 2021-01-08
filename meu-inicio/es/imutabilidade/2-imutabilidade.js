const students = [
    {
        name: 'Exemplo1',
        grade: 6
    },
    {
        name: 'Exemplo2',
        grade: 10
    },
    {
        name: 'Exemplo3',
        grade: 4
    },
    {
        name: 'Exemplo4',
        grade: 9

    }
];

function Approved(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log("Aprovados");
console.log(Approved(students));

console.log("\nLista de alunos");
console.log(students);

// Não se altera a lista de estudantes para se ter os aprovados;