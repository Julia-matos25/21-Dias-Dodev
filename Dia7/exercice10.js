let name = prompt("Insira o seu nome: ")
let cpf = parseInt(prompt("Insira o seu CPF: "))
let saldo = 100;
let contador = 0
let continuar = 1
let maiorValor = 0
let mediaValores = 0
do{

    let operacao = prompt("Insira a operação (s/d) ")
    let valor = parseInt(prompt("Insira um valor"))

    if(valor > maiorValor){
      maiorValor = valor
    }

if(operacao == 's' && valor <= saldo){
    saldo -= valor
} else if (operacao == 's' && valor > saldo){
    console.log("o valor inserido deve ser menor que o saldo")
}else{
    saldo += valor
}

contador++
console.log("Seu saldo é de " + saldo)
console.log("O maior valor inserido foi:  " + maiorValor)
console.log("A media dos valores foi: " + (mediaValores / contador))

continuar = parseInt(prompt("deseja continuar? 1 - sim, 2 - não"))




}while(continuar == 1)
    


