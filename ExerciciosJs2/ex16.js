const somarNumeros = (array) =>{
    return array.reduce((acumulador, atual)=>{
        return acumulador += atual
    })
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([10, 10, 10, 15]))