const contarCaracteres = (char, string) =>{
    let contador = 0
    for(let i = 0; i < string.length; i++){
        if(string[i].toLowerCase() == char.toLowerCase()){
            contador++
        }
    }
    return contador
} 


console.log(contarCaracteres('r', 'A sorte favorece os audazes'))
console.log(contarCaracteres('a','AaAa'))