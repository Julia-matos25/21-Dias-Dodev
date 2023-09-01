//!Parte 1 
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

//!Parte 2 
let pedirNumero = []
let arrayInvertido = []
 for (let y = 0; y < 5; y++) {
    pedirNumeroUsuario = parseInt(prompt("INSIRA 5 NÚMEROS"))
    pedirNumero[y] = pedirNumeroUsuario
 }
 
console.log("Array original: " + pedirNumero)
 
//invertendo o array
let invertir = 4
for (let j = 0; j < 5; j++) {
    arrayInvertido[j] = pedirNumero[invertir]
    invertir--
}
console.log("Array invertido: " + arrayInvertido)