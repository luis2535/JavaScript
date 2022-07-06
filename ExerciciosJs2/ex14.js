const receberSomenteParesDeIndicePar = (array) =>{
    return array.filter((valor, indice)=>{
        if(valor %2 ==0 && indice %2 ==0){
            return valor
        }
    })
}

console.log(receberSomenteParesDeIndicePar([1,2,3,4]))
console.log(receberSomenteParesDeIndicePar([10,70,22,43]))
console.log(receberSomenteParesDeIndicePar([10,70,22,43,60]))