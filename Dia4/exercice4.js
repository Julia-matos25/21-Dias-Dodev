let hunger
let money
let open

hunger = prompt("Você está com fome? ")
money = prompt("Você tem dinheiro? ")
open = prompt("O restaurante está aberto? ")

if (hunger == "nao" || money == "nao"){
    console.log("Hoje a janta será em casa")
}
if(hunger == "sim" && money == "sim" && open == "nao"){
    console.log("Peça um delivery!")
}
if(hunger == "sim" && money == "sim" && open == "sim"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
}