const filtrarNumeros = (array) =>{
    let retorno = []
    array.map(element => {
        if(typeof(element) == 'number'){
            retorno.push(element)
        }    
    });
    return retorno
}

console.log(filtrarNumeros(['Javascript', 1, '3', 'web', 20]))