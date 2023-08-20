let nomeUsuario;
let idadeUsuario;
let altura;
let peso;

nomeUsuario = prompt("Insira o seu nome: ");
idadeUsuario = parseInt(prompt('Insira a sua idade: '));
altura = parseFloat(prompt("Insira sua altura: "));
peso = parseFloat(prompt("Insira o seu peso: "));

let anoNasc = 0;
anoNasc = 2023 - idadeUsuario;

let imc = 0;
imc = peso / (altura * altura);

console.log("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos, nasceu em " + anoNasc + ", tem " + altura + " metros de altura e pesa " + peso + " kg.");

