const inverso = (a) =>{
    if(typeof(a) == 'boolean'){
        return !(a)
    }else if(typeof(a) == 'number'){
        return (-1 * a)
    }else{
        return `booleano ou números esperados, mas o parâmetro passado é do tipo ${typeof(a)}`
    }
}

console.log(inverso(20))
console.log(inverso(true))
console.log(inverso('string'))