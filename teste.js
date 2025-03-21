function Aluno(nome, idade, turma) {
    this.nome = nome
    this.idade = idade
    this.turma = turma
}

const a = new Aluno('cesar', 10, 'A')
const b = new Aluno('henrique', 20, 'B')
const c = new Aluno('maria', 15, 'C')
const d = new Aluno('joao', 18, 'D')

console.log(a)
console.log(b)

let alunos = []
alunos.push(a)
alunos.push(b)
alunos.push(c)
alunos.push(d)

console.log(alunos)