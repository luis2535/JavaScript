const receberMelhorEstudante = (obj)=>{
    const obj2 = {}
    let nomes = []
    let medias= []
    Object.entries(obj).forEach(([chave, valor])=>{
        nomes.push(chave)
        medias.push(valor.reduce((acumulador, atual)=>{
            return acumulador += atual
        })/valor.length)
    })
    const maiorMedia = Math.max(...medias)
    const maiorMediaIndex = medias.indexOf(maiorMedia)
    obj2.nome = nomes[maiorMediaIndex]
    obj2.media = medias[maiorMediaIndex]

    return obj2
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))