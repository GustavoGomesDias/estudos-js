const aluno = {
    nome: 'Bruno', 
    sobrenome: 'Campos'
};

// Imprime as keys
for(var dado in aluno){
    console.log(dado);
}

// Imprime os values
for(var dado in aluno){
    console.log(aluno[dado]);
}

