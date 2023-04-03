

function gerarNumeroNaoContido (min , max , array){

const aleatorio = (parseInt(Math.random() * (min + 1 - max )) + min) * -1 

return array.includes(aleatorio) ? gerarNumeroNaoContido( min , max , array) : aleatorio

}


function gerarNumeros(qtde) {

const numeros = Array (qtde).fill(0).reduce((nums) => { 

const novoNumero = gerarNumeroNaoContido(1, 60 , nums)

return [...nums, novoNumero]

} , []).sort((n1 , n2) => n1 - n2) 

return numeros

}

console.log(gerarNumeros(7))

