let number1 = parseInt(prompt("Insira 1 número: "))
let number2 = parseInt(prompt("Insira 1 número: "))
let opcao = parseInt(prompt("qual operação matemática você deseja realizar:"
+ "n1/ + n2 - n3/ * n4  / "))

switch(opcao){
   case 1: 
   console.log (number1 + number2)
   break
   case 2: 
   console.log(number1 - number2)
   break
   case 3: 
   console.log(number1 * number2)
   break
   case 4: 
   console.log(number1 / number2)
   break
   default:
   console.log("default")
   
}
