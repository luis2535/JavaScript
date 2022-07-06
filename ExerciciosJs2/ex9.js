const repetir = (param, vezes) => {
    let array = []
    for(let i = 0; i < vezes ; i++){
        array.push(param)
    }
    return array
}

console.log(repetir('código', 3))

console.log(repetir(7, 5))