// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.

const sistema = function(a){
    if(a >= 38){
        let resto = a % 10
        if(resto < 5 && (5 - resto) < 3){
            a = a + (5 - resto)
        }else if(resto < 10 && (10 - resto) < 3){
            a = a + (10 - resto)
        }
        return `Aprovado, nota ${a}`
    }else{
        return `Reprovado, nota ${a}`
    }
}

console.log(sistema(38))
console.log(sistema(28))
console.log(sistema(84))
console.log(sistema(90))
console.log(sistema(76))
console.log(sistema(42))
console.log(sistema(97))
console.log(sistema(99))
console.log(sistema(93))