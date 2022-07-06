const inverter = (obj) =>{
    const obj2 = {}
    Object.entries(obj).forEach(([chave, valor])=>{
        obj2[valor] = chave
    })
    return obj2
}


console.log(inverter({a: 1, b: 2, c: 3}))