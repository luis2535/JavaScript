const buscaPalavrasSemelhantes = (busca, array) =>{
    return array.filter(palavra=> palavra.includes(busca))
}
console.log(buscaPalavrasSemelhantes('pro', ['profissional', 'mobile', 'programador', 'copro']))