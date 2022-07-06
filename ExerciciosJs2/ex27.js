const filtrarPorQuantidadeDeDigitos =(array, numero)=>{
    return array.filter(valor=>{
        if(valor.toString().length == numero){
            return valor
        }
    })
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))