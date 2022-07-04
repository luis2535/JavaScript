// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

const vetor = [10,20,30,40,50,11,12,9,17]

const intervalo = (vetorNumeros) =>{
    let dentro = 0
    let fora = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20){
            dentro++
        }else{
            fora++
        }
    }
    console.log(`A quantidade de numeros dentro do intervalo é ${dentro}`)
    console.log(`A quantidade de numeros fora do intervalo é ${fora}`)
}

intervalo(vetor)