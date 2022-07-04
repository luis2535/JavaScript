// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

const aritmetica = (n, a1, r) =>{
    let vetor = [a1]
    for(let i = 1; i < n; i++){
        vetor.push(vetor[i-1]+r)
    }
    console.log(`Progressão aritmetica: ${vetor}`)
}

const geometrica = (n, a1, r) =>{
    let vetor = [a1]
    for(let i = 1; i < n; i++){
        vetor.push(vetor[i-1] * r)
    }
    console.log(`Progressão geometrica: ${vetor}`)
}

aritmetica(5,1,2)
geometrica(5,1,2)