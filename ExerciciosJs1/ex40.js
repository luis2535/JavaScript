// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

const conceitos = (vetorNotas) =>{
    let vetorConceitos = []
    for(let i = 0; i < vetorNotas.length; i++){
        if(vetorNotas[i] >= 0 && vetorNotas[i] <= 4.9){
            vetorConceitos.push('D')
        }else if(vetorNotas[i] >= 5.0 && vetorNotas[i] <= 6.9){
            vetorConceitos.push('C')
        }else if(vetorNotas[i] >= 7.0 && vetorNotas[i] <= 8.9){
            vetorConceitos.push('B')
        }else if(vetorNotas[i] >= 9.0 && vetorNotas[i] <=10.0){
            vetorConceitos.push('A')
        }
    }
    console.log(`Vetor de conceitos: ${vetorConceitos}`)
}

const vetor = [4.3, 5.0, 7.5, 9.2, 2.3, 8.9]

conceitos(vetor)