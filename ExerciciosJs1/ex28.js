// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const vetor = [1,2,3,4,5,6,7,8,9,0,12,11,24,24,20,29]

const parImpar = (vetorNumeros)=>{
    let pares = 0 
    let impares = 0
    for(let i = 0; i < vetorNumeros.length ; i++){
        if(vetorNumeros[i] % 2 == 0){
            pares++
        }else{
            impares++
        }
    }
    console.log(`A quantidade de numeros pares no vetor é ${pares}`)
    console.log(`A quantidade de numeros impares no vetor é ${impares}`)
}
parImpar(vetor)