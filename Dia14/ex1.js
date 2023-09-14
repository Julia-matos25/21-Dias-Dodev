//Função para perguntar nome e salário do colaborador
let nomeColaborador;
let salarioColaborador;

function perguntarColaborador() {
  nomeColaborador = prompt("Insira o nome do colaborador: ");
  salarioColaborador = parseFloat(prompt("Insira o salário do colaborador: "));
  calcularAlmentoSalario(nomeColaborador, salarioColaborador);
}
// Função para calcular o aumento de salário
function calcularAlmentoSalario(nomeColaborador, salarioColaborador) {
  let aumento = 0;
  if (salarioColaborador <= 1500) {
    aumento = 0.2; //20%
  } else if (salarioColaborador <= 2000) {
    aumento = 0.15; //15%
  } else if (salarioColaborador <= 3000) {
    aumento = 0.1; //10%
  } else {
    aumento = 0.05; //5%
  }

  let novoSalario = salarioColaborador * (1 + aumento);

  //Exibindo resultados
  console.log("Nome do colaborador: " + nomeColaborador);
  console.log("Salário do colaborador: " + salarioColaborador);
  console.log("% de aumento do colaborador: " + aumento * 100 + "%");
  console.log("Salário reajustado: " + novoSalario.toFixed(2));

  perguntarNovamente(); //Perguntar se deseja calcular novamente
}
//Função para perguntar se o usuário deseja calcular novamente
function perguntarNovamente() {
  let resposta = prompt("Deseja calcular novamente? s/n");

  if (resposta == "s") {
    perguntarColaborador(); //Reiniciar o processo
  } else {
    console.log("Programa encerrado.");
  }
}
perguntarColaborador()