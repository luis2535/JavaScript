// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const planos = (a, b) =>{
    switch(a){
        case 'A':
            b = b + b * 0.1
            console.log(b.toFixed(2))
            break
        case 'B':
            b = b + b * 0.15
            console.log(b.toFixed(2))
            break
        case 'C':
            b = b + b * 0.2
            console.log(b.toFixed(2))
            break
        default:
            console.log('Plano invalido')
    }
}

planos('A', 1000)
planos('B', 1000)
planos('C', 1000)
planos('D', 1000)