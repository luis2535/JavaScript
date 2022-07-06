const calcularSalario = (horas, valorHora) => `Salário igual a R$${(horas*valorHora).toFixed(2)}`

console.log(calcularSalario(150, 40.5))