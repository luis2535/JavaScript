const funcaoDaSorte = (a) =>{
    const sorteado = Math.floor(Math.random() * a+1)
    if(a == sorteado){
        return `Parabéns! O número sorteado foi o ${sorteado}`
    }else{
        return `Que pena! O número sorteado foi o ${sorteado}`
    }
}
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(3))
console.log(funcaoDaSorte(1))
console.log(funcaoDaSorte(5))
