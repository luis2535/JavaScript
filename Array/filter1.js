const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 500
}))

const preco500 = (p) => p.preco >= 500
const ehFragil = (p) => p.fragil == true

console.log(produtos.filter(preco500).filter(ehFragil))