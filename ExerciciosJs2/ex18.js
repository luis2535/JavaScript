const calcularMedia = (array) =>{
    return array.reduce((acumulador, atual)=>{
        return acumulador + atual
    })/ array.length
}

console.log(calcularMedia([0,10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))