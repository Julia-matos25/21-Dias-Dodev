//Criando variáveis
let valor
let quantidade
let opcoes = parseInt(prompt("Digite 1 para gasolina, 2 para àlcool e 3 para calibrar")); 

//Criando switch case
switch(opcoes){
    case "1":
  valor = parseInt(prompt("Insira a quantidade que deseja abastecer: "))
  quantidade = valor / 5
 console.log("FORAM ABASTECIDOS " + quantidade + " L DE GASOLINA")
 break;
 case "2":
  valor = parseInt(prompt("Insira a quantidade que deseja abastecer: "))
  quantidade = valor / 3
 console.log("FORAM ABASTECIDOS " + quantidade + " L DE ALCOOL")
 break;
 case "3":
 console.log("PNEUS ABASTECIDOS COM SUCESSO")
 break;
 default:
    console.log("default")
    break;
}

