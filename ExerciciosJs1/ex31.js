// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const vetor = [1, -1, 2, -2, 3, -3, 4, 5, -9, 0]

const negativos = (vetorNumeros) =>{
    let quantidade = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] < 0 ){
            quantidade++
        }
    }
    console.log(`Numeros negativos no vetor: ${quantidade}`)
}

negativos(vetor)