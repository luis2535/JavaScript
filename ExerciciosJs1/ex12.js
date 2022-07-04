// 12) Faça um algoritmo que calcule o fatorial de um número.

function fat(a) {
    if(a == 1){
        return a
    }else{
        return a * fat(a-1)
    }
}
console.log(fat(5))
console.log(fat(4))