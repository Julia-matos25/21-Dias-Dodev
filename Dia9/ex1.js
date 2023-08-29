//criando variáveis
let nomeUsuario = prompt("Insira o seu nome: ");
let idade = Number(prompt("Insira sua idade: "));
let peso = Number(prompt("Insira o seu peso: "));
let altura = parseFloat(prompt("Insira a sua altura"));
let profissao = prompt("Insira a sua profição: ");

console.log(
  "Olá " +
    nomeUsuario +
    " você tem " +
    idade +
    " anos de idade " +
    "é " +
    profissao +
    " tem " +
    altura +
    " de altura" +
    " e pesa " +
    peso +
    "kg"
);
//verificando idade
if (idade >= 18) {
  console.log("Está liberado para tomar umas geladas");
} else {
  console.log("Sem gelada para você");
}
//descobrindo idade fracionada
let meses = idade * 12;
let semanas = idade * 52;
let dias = idade * 365;

console.log("Sua idade em meses é: " + meses);
console.log("Sua idade em semanas é: " + semanas);
console.log("Sua idade em dias é: " + dias);

//calculando imc
let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Magreza");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Normal");
} else if (imc <= 25 && imc <= 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}

//Descobrindo ano em que nasceu
let anoAtual = 2023;
let anoNascimento = anoAtual - idade;
console.log("Você nasceu no ano de " + anoNascimento);

//Descobrindo idade em anos de vida do usuário
let anoVivido;
let idadeAtual = 0;
for (anoVivido = anoNascimento; anoVivido <= anoAtual; anoVivido++) {
  console.log(anoVivido + " - " + idadeAtual + " anos de idade");
  idadeAtual++;
}
//loop doWhile
let continua;
do {
  continua = prompt("Deseja continuar inserindo informações? s/n");
} while (continua == "s");
