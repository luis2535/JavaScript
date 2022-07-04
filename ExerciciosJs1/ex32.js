// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 20]

const mediaAritmetica = (vetorNumeros) =>{
    let soma = 0
    for(let i = 0; i<vetorNumeros.length; i++){
        soma += vetorNumeros[i]
    }
    let media = 0
    media = soma/vetorNumeros.length
    console.log(`Média aritmética do vetor é ${media.toFixed(2)}`)
}

mediaAritmetica(vetor)