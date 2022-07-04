// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

const funcao1 = (a, b) =>{
    let vetor2 = []
    for(let i = 0; i < a.length; i++){
        vetor2.push(a[i] * b)
    }
    console.log(`Vetor função 1: ${vetor2}`)
}
const funcao2 = (a, b) =>{
    let vetor2 = []
    for(let i = 0; i < a.length; i++){
        if(a[i] > 5){
            vetor2.push(a[i] * b)
        }else{
            vetor2.push(a[i])
        }
    }
    console.log(`Vetor função 2: ${vetor2}`)
}
const vetor = [1, 2, 3, 4, 5, 6, 7 ,8]
let constante = 3

funcao1(vetor, constante)
funcao2(vetor, constante)