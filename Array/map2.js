const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const jsonParse = e =>JSON.parse(e)
const selecionarPreco = e => e.preco

let resultado = carrinho.map(jsonParse).map(selecionarPreco)
console.log(resultado)