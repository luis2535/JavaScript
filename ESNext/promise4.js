function gerarNumerosEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve =>{
        setTimeout (function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
        
    })
}



function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
        gerarNumerosEntre(1, 60, 3000)
    ])
}
console.time('promise')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(()=>{
        console.timeEnd('promise')
    })
