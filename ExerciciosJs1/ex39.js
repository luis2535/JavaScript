// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

const trocaVetores = (vetor1, vetor2) =>{
    if(vetor1.length == vetor2.length){
        for(let i = 0; i < vetor1.length; i++){
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
    }else{
        console.log('Tamanho de vetor diferentes')
    }
    console.log(vetor1, vetor2)
}

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

trocaVetores(array1, array2)