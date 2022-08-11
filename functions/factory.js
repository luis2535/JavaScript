function criarProduto(nome = 'roupa', valor = 80, desconto = 15){
    return{
        nome,
        valor,
        desconto: desconto
    }
}
console.log(criarProduto('Camisa', 50))
console.log(criarProduto())
console.log(criarProduto('nome', 150, 90))