console.log(module.exports === this)
console.log(module.exports === exports)


this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

// exports = {
//     nome: 'Teste'
// } dessa forma não altera o resultado do export
console.log(module.exports)

module.exports = { publico: true } //utilizar dessa forma para alterar resultado