const menorNumero =(array)=>{
    let menor = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] < menor){
            menor = array[i]
        }
    }
    return menor
}


console.log(menorNumero([10, 5, 35, 65, -1]))