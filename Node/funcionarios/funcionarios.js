const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const genero = (a) => a['genero'] == 'F'
const pais = (a) => a['pais'] == 'China'

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    let mulherChinesa = funcionarios.filter(genero).filter(pais)
    let menor = mulherChinesa[0]
    let menorSalario = mulherChinesa.reduce((acumulador, atual)=>{
        if(atual.salario <= menor.salario){
            acumulador = atual
            menor = acumulador
        }
        return acumulador
    })
    console.log(menorSalario)
})
