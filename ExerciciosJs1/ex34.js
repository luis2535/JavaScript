// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

const contemCaracteres = (str1, str2) =>{
    let teste = 0
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str1.toLowerCase().charAt(i) == str2.toLowerCase().charAt(j)){
                teste++
                break
            }
        }
        if(teste == 0){
            return false
        }
        teste = 0
    }
    for(let i = 0; i < str2.length; i++){
        for(let j = 0; j < str1.length; j++){
            if(str2.toLowerCase().charAt(i) == str1.toLowerCase().charAt(j)){
                teste++
                break
            }
        }
        if(teste == 0){
            return false
        }
        teste = 0
    }
    return true
}

let string1 = 'abcd'
let string2 = 'dacb'

console.log(contemCaracteres(string1,string2))

let string3 = 'a'
let string4 = 'ab'

console.log(contemCaracteres(string3,string4))