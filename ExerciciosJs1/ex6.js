// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const simples = (a, b, c) => a + (a * b * c)

const composto = (a, b, c) => a * (1+b)**c

console.log(simples(1000, 0.1, 10))

console.log(composto(1000, 0.1, 10))