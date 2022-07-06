const multiplicar = (a, b) =>{
    let somatorio = 0;
    for(let i = 0; i < b ; i++){
        somatorio += a
    }
    return somatorio
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))