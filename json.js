let aluno = {
    nome: "Ayesa Sales",
    idade: 21,
    curso: "Ciência da Computação",
    notas: [9.0, 8.5, 9.5],
    endereco: {
        rua: "Rua Pedro Alves de Andrade",
        cidade: "João Pessoa",
        estado: "PB"
    }
};

console.log(aluno.nome); 
console.log(aluno.notas[0]); 

aluno.idade = 22; 
aluno.notas.push(10.0); 

let alunoString = JSON.stringify(aluno);
console.log(alunoString); 

let alunoObjeto = JSON.parse(alunoString);
console.log(alunoObjeto); 

for (let propriedade in aluno) {
    console.log(propriedade + ":" + aluno[propriedade]);
}

let mediaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
console.log('Média das notas:' , mediaNotas); 

console.log(aluno.endereco.cidade); 
console.log(aluno.endereco.estado); 

let alunos = [
    {
        nome: "Emilly Almeida",
        idade: 22,
        curso: "Nutrição",
        notas: [7.5, 9.5, 10.0]
    },
    {
        nome: "Bianca Vitória",
        idade: 21,
        curso: "Terapia Ocupacional",
        notas: [9.5, 8.5, 10.0]
    },
    aluno 
];
let alunosFiltrados = alunos.filter(a => {
    let media = a.notas.reduce((acc, nota) => acc + nota, 0) / a.notas.length;
    return media > 8;
});

console.log(alunosFiltrados);
