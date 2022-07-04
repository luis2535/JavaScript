// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const media = (cod, a, b, c) =>{

    if(a > b && a > c){
        retorno = (a * 4 + b * 3 + c * 3)/10
    }else if(b > a && b > c){
        retorno = (a * 3 + b * 4 + c * 3)/10
    }else{
        retorno = (a * a + b * 3 + c * 4)/10
    }
    if(retorno >= 5){
        console.log(`Código aluno ${cod}: APROVADO`)
    }else{
        console.log(`Código aluno ${cod}: REPROVADO`)
    }
}

media(100, 5, 5, 5)
media(123, 2.8, 6, 3.5)