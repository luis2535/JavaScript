const despesasTotais = (obj) =>{
    return obj.map((valor)=> valor.preco).reduce((acumulador, atual)=>{
        return acumulador + atual
    })
}

console.log(despesasTotais([
    {nome: 'Jornal online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entretenimento', preco:150}
]))