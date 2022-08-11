const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const saudacao = require('saudacao')

console.log(saudacao.ola)

const moduloC =  require('./pastaC')
console.log(moduloC.ola)

const http = require('http')

http.createServer((req, res)=>{
    res.write('Bom dia')
    res.end()
}).listen(8080)