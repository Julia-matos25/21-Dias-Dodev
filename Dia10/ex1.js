//CRIANDO VARIÁVEIS
let arrayNumero = []
let indicesEncontrados = []
//Populando array
for (let i = 0;  i < 5 ; i++) {
    let arrayNumeros = Number(prompt("Insira o " + ( i + 1) + "º número"))
    arrayNumero[i] = arrayNumeros
}

//Procurando número
let numeroProcurado = parseInt(prompt("Insira o número que deseja procurar no array"))
let contador  = 0

for (let i= 0; i < arrayNumero.length; i++) {
    if(arrayNumero[i] == numeroProcurado){
        indicesEncontrados[contador] = i
        contador++
    }
    
}

console.log("O número inserido aparece no índice: " + indicesEncontrados)