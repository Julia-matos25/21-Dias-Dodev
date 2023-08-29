// CRIANDO VARIÁVEIS/LOOP
let confirmar = "n";
let salarioAtual = 0;

while (confirmar !== "s") {
  let nomeUsuario = prompt("Insira o seu nome: ");
  let idade = parseInt(prompt("Insira sua idade: "));
  salarioAtual = parseFloat(prompt("Insira o seu salário: "));
  console.log("Nome: " + nomeUsuario);
  console.log("Idade: " + idade);
  console.log("Salário: " + salarioAtual);

  confirmar = prompt("As informações estão corretas? s/n");
}

// FAZENDO A PREVISÃO DO SALÁRIO
let aumento = 0.015;
console.log("Previsão salarial para os próximos 10 anos: ");

for (let ano = 1; ano <= 10; ano++) {
  salarioAtual += salarioAtual * aumento;

  console.log((2023 + ano) + " = R$ " + salarioAtual.toFixed(2));
}
