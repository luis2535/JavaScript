const removerVogal =(palavra) =>{
    let resultado =''
    for(let i = 0; i <palavra.length; i++){
        if(palavra[i].toLowerCase() === 'a' || palavra[i].toLowerCase() === 'e' || palavra[i].toLowerCase() === 'i' || palavra[i].toLowerCase() === 'o' || palavra[i].toLowerCase() === 'u'){
        }else{
            resultado += palavra[i]
        }
    }
    return resultado
}
console.log(removerVogal('aepeiou'))
