const segundoMaior =(array)=>{
    const maior = Math.max(...array)
    array = array.filter(num=>num != maior)
    const segundoMaior = Math.max(...array)
    return segundoMaior
}

console.log(segundoMaior([12,16,1,5,13]))