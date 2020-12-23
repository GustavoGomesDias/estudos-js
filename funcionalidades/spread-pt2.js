const produtos = [
    {
        id: '01',
        desc: ['Mouse', '25.00']
    },
    {
        id: '02',
        desc: ['Teclado', '50.00']
    }
];

// Array com 2 objetos
// console.log(produtos);

// Usando spread agora
const p = [...produtos];

// Imprime os objetos da mesma forma q o anterior
// console.log(p);

const n1 = [100, 200, 300];
const n2 = [400, 500, 600];
const n3 = [700, 800, 900];

// Contatena n1, n2 e n3
const n4 = [...n1, ...n2, ...n3];
// console.log(n4);

// Para objetos
const aluno = {
    nome: 'Bruno', 
    sobrenome: 'Campos'
};

const notas = {
    n1: 80,
    n2: 75,
    n3: 92,
    n4: 85
};

const info = {
    ...aluno,
    ...notas
};

console.log(info);