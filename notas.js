const alunos = [];

const alunosNotas = alunos.map(function(nomeDoAluno) {
    return {
        nome: nomeDoAluno,
        nota: ''
    }
})
 
alunosNotas.push({
    nome: 'Julia',
    nota: 7
})

alunosNotas.push({
    nome: 'Ricardo',
    nota: 5
})

alunosNotas.push({
    nome: 'Nicolas',
    nota: 10
})

alunosNotas.push({
    nome: 'Ivani',
    nota: 6
})

 alunosNotas.push({
    nome: 'Camila',
    nota: 4 
 })

function alunosAprovados(alunosNotas) {
    return alunosNotas.nota >= 6
}

const aprovados = alunosNotas.filter(alunosAprovados)

console.log(aprovados)

