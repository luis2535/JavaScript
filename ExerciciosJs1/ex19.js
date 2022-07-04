// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const lanchonete = (a, b) =>{
    let valor = 0
    switch(a){
        case 100:
            valor = 3 * b
            console.log(`R$${valor.toFixed(2)}`)
            break
        case 200:
            valor = 4 * b
            console.log(`R$${valor.toFixed(2)}`)
            break
        case 300:
            valor = 5.5 * b
            console.log(`R$${valor.toFixed(2)}`)
            break
        case 400:
            valor = 7.5 * b
            console.log(`R$${valor.toFixed(2)}`)
            break
        case 500:
            valor = 3.5 * b
            console.log(`R$${valor.toFixed(2)}`)
            break
        case 600:
            valor = 2.8 * b
            console.log(`R$${valor.toFixed(2)}`)
            break
        default:
            console.log('Código de produto não existe')
    }
}
lanchonete(100, 3)
lanchonete(200, 1)
lanchonete(300, 5)
lanchonete(400, 2)
lanchonete(500, 1)
lanchonete(600, 2)
lanchonete(700, 3)