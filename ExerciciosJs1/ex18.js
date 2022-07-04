// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

const numeros = (a) =>{
    switch(a){
        case 1:
            console.log('UM')
            break
        case 2:
            console.log('DOIS')
            break
        case 3:
            console.log('TRÊS')
            break
        case 4:
            console.log('QUATRO')
            break
        case 5:
            console.log('CINCO')
            break
        case 6:
            console.log('SEIS')
            break
        case 7:
            console.log('SETE')
            break
        case 8:
            console.log('OITO')
            break
        case 9:
            console.log('NOVE')
            break
        case 10:
            console.log('DEZ')
            break
        default:
            console.log('NUMERO FORA DO INTERVALO')   
    }
}

numeros(1)
numeros(2)
numeros(3)
numeros(4)
numeros(5)
numeros(6)
numeros(7)
numeros(8)
numeros(9)
numeros(10)
numeros(11)