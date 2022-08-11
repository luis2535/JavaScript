const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')



function conteudoArquivo (caminho){
    return new Promise(resolve=>{
        fs.readFile(caminho,(_, conteudo)=>{
            resolve(conteudo.toString())
        })
    })
}


conteudoArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `Valor final é ${conteudo}`)
    .then(console.log)