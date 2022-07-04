// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const vetor = [10,20,30,40,50,11,12,9,17]

const maiorMenor = (vetorNumeros) =>{
    let maior = vetorNumeros[0]
    let menor = vetorNumeros[0]
    for(let i = 1; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] > maior){
            maior = vetorNumeros[i]
        }
        if(vetorNumeros[i] < menor){
            menor = vetorNumeros[i]
        }
    }
    console.log(`O maior valor do vetor é ${maior} e o menor é ${menor}`)
}

maiorMenor(vetor)