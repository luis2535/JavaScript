let p = new Promise(function(resolve) {
    resolve(['Ana', 'Lucas', 'Pedro'])
})


p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra =>letra.toLowerCase())
    .then(letraMin => console.log(letraMin))
    