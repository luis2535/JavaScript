const maiorOuIgual = (a,b) =>{
    return ((a > b || a === b) ? true : false)
}

console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(0,"0"))
console.log(maiorOuIgual(1, 5))