const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}

]
// D1: Todos são bolsistas?
const todosBolsistas = alunos.map(a=> a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
})
console.log(todosBolsistas)
// D2: há algum bolsistas
const haBolsistas = alunos.map(a=> a.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
})
console.log(haBolsistas)