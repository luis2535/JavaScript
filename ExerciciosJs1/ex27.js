// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const alturas = (altura1, taxa1, altura2, taxa2) =>{
    let contador = 0
    if(altura1 > altura2){
        if(taxa2 > taxa1){
            while(altura1 > altura2){
                altura1 += altura1 * taxa1
                altura2 += altura2 * taxa2
                contador++
            }
            console.log(`Após ${contador} ano(s) a criança 2 ultrapassará a criança 1`)
        }else{
            console.log('A criança 1 é maior que a criança 2 e nunca será ultrapassada')
        }
    }else if(altura2 > altura1){
        if(taxa1 > taxa2){
            while(altura2 > altura1){
                altura1 += altura1 * taxa1
                altura2 += altura2 * taxa2
                contador++
            }
            console.log(`Após ${contador} ano(s) a criança 1 ultrapassará a criança 2`)
        }else{
            console.log('A criança 2 é maior que a criança 1 e nunca será ultrapassada') 
        }
    }else{
        if(taxa1 > taxa2){
            console.log('As duas crianças tem o mesmo tamanho, mas após 1 ano a criança 1 ficará maior')
        }else{
            console.log('As duas crianças tem o mesmo tamanho, mas após 1 ano a criança 2 ficará maior')
        }
    }
}
alturas(100,0.2,80,0.5)
alturas(100,0.2,100,0.5)
alturas(80,0.2,100,0.5)
alturas(80,0.3,100,0.2)