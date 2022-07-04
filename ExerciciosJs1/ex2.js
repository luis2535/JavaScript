// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo(a, b, c){
    if(a == b && b == c){
        return 'equilatero'
    }else if(a == b || a == c || b == c){
        return 'isósceles'
    }
    else{
        return 'escaleno'
    }
}

console.log(triangulo(5,5,5))
console.log(triangulo(1,2,3))
console.log(triangulo(5,5,8))
